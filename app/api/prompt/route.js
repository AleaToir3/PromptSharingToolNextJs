import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request,{params})=>{
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts),{status:200})
    } catch (error) {
        return new Response("FETCH ALL FAILED !",{status:500})
    }
}