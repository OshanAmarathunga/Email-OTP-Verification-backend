import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
const register=async(req,res)=>{
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
        return res.status(200).json({
            message:"User registered successfully",user,
        })

    }catch(err){
        console.log(err);
    }
}

export default register;