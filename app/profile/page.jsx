 "use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState,useEffect } from "react"
import Profile from "@components/Profile"

const MyProfile = () => {
  const {data: session } = useSession();
  const [posts,setPosts] = useState([]);
  const router = useRouter();

  const handleEdite = (post)=>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async(post)=>{
    const confirmDeleteUser = confirm("Are you sur you want to delete this Prompt???");
   
    if(confirmDeleteUser){
      try {
        const reponse = await fetch(`/api/prompt/${post._id.toString()}`,{
          method:'DELETE'            
        });

        const filteredPostWithouDeletePost = posts.filter((p)=>p._id !== post._id) 
        setPosts(filteredPostWithouDeletePost)
      } catch (error) {
        console.log(error);
      }
    }
    
  
   }

   useEffect(()=>{
    const fetchPots = async()=>{
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    if(session?.user.id) fetchPots()
  },[])

  return (
  <Profile 
    name='My'
    desc='Welcome description profile'
    data={posts}
    handleEdite={handleEdite}
    handleDelete={handleDelete}
  />  )
}

export default MyProfile