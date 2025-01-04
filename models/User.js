import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        requierd:true,
        unique:true,
    },

    name:{
        type:String,
        requierd:true,
    },
    password:{
        typw:String,
        requierd:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    }
})