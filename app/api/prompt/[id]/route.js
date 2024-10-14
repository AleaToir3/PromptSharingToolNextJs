import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request,{params})=>{
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt) return new Response('Prompt not found',{status:404})
        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        return new Response("FETCH ID FAILED !",{status:500})
    }
}

export const PATCH = async (req,{params}) => {
    const {prompt,tag}= await req.json();

    try {
        await connectToDB();
        const promptToUpdate = await Prompt.findById(params.id);
        if(!promptToUpdate) return new Response('Prompt not found',{status:404})

            promptToUpdate.prompt =prompt;
            promptToUpdate.tag =tag;

            await promptToUpdate.save();

            return new Response(JSON.stringify("UPDATE SUCCESS !"),{status:200})
        } catch (error) {
            return new Response("update failed !",{status:500})

    }

}

export const DELETE = async (req,{params})=>{
    try {
        await connectToDB();
        const promptToDelete = await Prompt.findByIdAndDelete(params.id)
        return new Response('Prompt deleted successfully',{status:200})

    } catch (error) {
        
    } 
}