import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req)=>{
    console.log("entre dans ma route prompte");
    const {userId,prompt,tag} = await req.json();

    try {
        await connectToDB()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response("new prompt Failed! ",{status:500}) 
    }
}