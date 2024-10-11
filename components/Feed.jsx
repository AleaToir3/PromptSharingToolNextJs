 "use client";

import { useState,useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({data,handleTagClick})=>{
  return (
    <div className='mt-16 prompt_layout'>
        {data.map((post)=>
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
        )}
    </div>
  )
}
const Feed = () => {
 const [searchText, setSearchText] = useState('');
 const [posts,setPosts] = useState([]);

 const handleSeachChange = (e)=>{

 }
 useEffect(()=>{
  const fetchPots = async()=>{
    const response = await fetch('/api/prompt');
    const data = await response.json();
    setPosts(data)
  }
  fetchPots()
 },[])
  return (
    <section className="feed">
        <form className='relative w-full flex-center'>
          <input className="search_input peer"
          type="text"
          placeholder="Search tag or user"
          value={searchText}
          onChange={handleSeachChange}
          required />
        </form>
        <PromptCardList data={posts} handleTagClick = {()=>{}} />
    </section>
  )
}

export default Feed