import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "oooshan94@email.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async ()=>{
    try{
        const info = await transporter.sendMail({
            from: '"Code by oshan 👻" <oooshan94@gmail.com>', // sender address
            to: "oshanamarathunga1@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
          console.log(info);
          
    }catch(error){
        log.error(error);
    }
}

export default sendEmail;
