import { transporter } from "./EmailConfig.js";

export const sendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
                from: '"Code by oshan 👻" <oooshan94@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Verify your email!", // Subject line
                text: "verify your email for application!", // plain text body
                html: verificationCode, // html body
              });
              console.log("Email send successfully",response);
  } catch (error) {
    console.log("Email error",error);
    
  }
};
