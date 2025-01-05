import { sendVerificationCode, welcomeEmail } from "../middleware/Email.js";
import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
export const register=async(req,res)=>{
    try{
        const {email,password,name}=req.body;
        if(!email || !password || !name){
            return res.status(400).json({
                message:"All feilds are required",
            });
        }
        const existingUser=await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists, Please Login",
                
            })
        }

        const hashPassord=await bcrypt.hashSync(password,10);
        const verificationCode=Math.floor(100000+Math.random()*900000).toString();
        const user=new UserModel({
            email,
            password:hashPassord,
            name,
            verificationCode,
        })
        await user.save();
        
        sendVerificationCode(user.email,verificationCode); 
        return res.status(200).json({
            message:"User registered successfully",user,
        })

    }catch(err){
        console.log(err);
    }
}


export const verifyEmail=async(req,res)=>{
    try{
        const code=req.body.code;
        
        const user=await UserModel.findOne({
            verificationCode:code
        });

        if(!user){
            return res.status(400).json({
                message:"Invalid verification code",
            })
        }

        user.isVerified=true; 
        user.verificationCode=undefined;

        await user.save();
        await welcomeEmail(user.email,user.name);
        return res.status(200).json({
            message:"Email verified successfully",
        })

    }catch(err){
        console.log(err);
    }
}