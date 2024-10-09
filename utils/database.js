import mongoose from "mongoose";
let isConnect = false;
export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true)
    if(isConnect) {
        console.log('Already connect !');
        return 
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{ dbName:'share_prompt' })
        console.log('Connection Mongo DB ! on !!!');
        isConnect = true;
    } catch (error) {
        console.log(error);
    }
}