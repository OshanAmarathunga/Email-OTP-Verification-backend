import mongoose from "mongoose";

const DBcon=async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully");
        
    }catch(error){
        log.error(`Database connection failed! ${error}`);
    }
}

export default DBcon;