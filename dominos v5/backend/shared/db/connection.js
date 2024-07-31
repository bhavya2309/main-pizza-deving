import mongoose from "mongoose";

export const createConnection = async()=>{
    try{
        const result=await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully");
    }
    catch(err){
        console.log("Db connection Failed");
        throw err;
    }
}