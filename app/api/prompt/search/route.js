import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request)=>{

    const params = useSearchParams()
    await connectToDB();

    if(params.get('search')){
        const searchPrompt = params.get('search')
        const prompt = await Prompt.find(searchPrompt )
        console.log(
            JSON.stringify(prompt)
        );

    }
    // try {
    //     await connectToDB();
    //     const prompts = await Prompt.find({}).populate('creator')
    //     return new Response(JSON.stringify(prompts),{status:200})
    // } catch (error) {
    //     return new Response("FETCH ALL FAILED !",{status:500})
    // }
}





// implement : 
//         Search by : 
//             prompt
//             tag
//             username 
//         Click on tag 
//         view other profile

