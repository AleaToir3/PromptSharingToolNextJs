"use client";
import Form from '@components/Form'
import React from 'react'
import { useState } from 'react/'
import { useRouter } from "next/navigation";


const CreatePrompt = () => {
    const [submitting,setSubmitting] = useState(false)
    const [post,setPost] = useState({
        prompt:'',
        tag:'',
    })
    const router = useRouter();


    const createPrompt = async (e)=>{
        e.preventDefautl();
        setSubmitting(true);
        try {
            const reponse = await fetch('/api/prompt/new',{
                method:'POST',
                prompt: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if(reponse.ok) router.push('/');
        } catch (error) {
            console.log(error);
        }
        finally {setSubmitting(false)
        }
}
  return (
<Form
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit = {createPrompt}
/>  )
}

export default CreatePrompt