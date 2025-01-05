import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SENDING_EMAIL,
    pass: process.env.EMAIL_PASSWORD, 
  },
  tls:{
    rejectUnauthorized:false,
  }
});

// const sendEmail = async ()=>{
//     try{
//         const info = await transporter.sendMail({
//             from: '"Code by oshan 👻" <oooshan94@gmail.com>', // sender address
//             to: "oshanamarathunga1@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//           });
//           console.log(info);
          
//     }catch(error){
//         log.error(error);
//     }
// }
