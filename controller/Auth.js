import { sendVerificationCode, welcomeEmail } from "../middleware/Email.js";
import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "All feilds are required",
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, Please Login",
      });
    }

    const hashPassord = await bcrypt.hashSync(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new UserModel({
      email,
      password: hashPassord,
      name,
      verificationCode,
    });
    await user.save();

    sendVerificationCode(user.email, verificationCode);
    return res.status(200).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const code = req.body.code;
    const email = req.body.email;

    const user = await UserModel.findOne({
      email: email,
    });

    if (!user) { // check user validity for user
      return res.status(400).json({
        message: "Invalid user email",
      });
    }
   
    
    if (user.isVerified) {
      console.log("User isVerified status:", user.isVerified); 
      return res.status(200).json({
        message: "User is already verified",
      });
    }


    if (user.verificationCode == code) {
      user.isVerified = true;

      await user.save();
      await welcomeEmail(user.email, user.name);
      return res.status(200).json({
        message: "Email verified successfully",
      });
    } else {
      return res.status(200).json({
        message: "Invalid verification code!",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const resendVerificationCode = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not found, Please register first!",
      });
    }

    const newVerificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    user.verificationCode = newVerificationCode;

    await user.save();
    sendVerificationCode(user.email, newVerificationCode);
    return res.status(200).json({
      message: "New verification code sent successfully",
    });
  } catch (erro) {
    console.log(err);
  }
};
