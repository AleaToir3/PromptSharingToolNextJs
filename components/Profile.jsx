import { ClientPageRoot } from "next/dist/client/components/client-page"
import PromptCard from "./PromptCard"

 
const Profile = ({name,desc,data,handleEdite,handleDelete}) => {
   return (
    <section className="w-full"> 
    <h1 className="head_text  text-left">
      <span className="blue_gradient">
        {name} Profile
      </span>
      </h1>

      <p className="desc text-left">{desc}</p>
      <div className='mt-10 prompt_layout'>
        {data.map((post)=>
          <PromptCard key={post._id} post={post} 
          handleEdite={()=>{handleEdite && handleEdite(post)} }
          handleDelete={()=>{handleDelete && handleDelete(post)} }
           />
        )}
    </div>

    </section>

  )
}

export default Profile

 