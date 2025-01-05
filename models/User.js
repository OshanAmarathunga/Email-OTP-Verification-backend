import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        requierd:true, 
        
    },

    name:{
        type:String,
        requierd:true,
    },
    password:{
        type:String,
        requierd:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verificationCode:{
        type:String,
    }, 
},{timestamps:true});

const UserModel=mongoose.model("User",userSchema);
export default UserModel;