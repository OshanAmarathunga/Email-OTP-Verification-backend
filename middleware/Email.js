import { Verification_Email_Template, Welcome_Email_Template } from "../libs/EmailTemplate.js";
import { transporter } from "./EmailConfig.js";

export const sendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
                from: "oooshan94@gmail.com", // sender address
                to: email, // list of receivers
                subject: "Verify your email!", // Subject line
                text: "verify your email with this otp"+ verificationCode, // plain text body
                html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // html body
              });
              console.log("Email send successfully");
  } catch (error) {
    console.log("Email error",error);
    
  }
};

export const welcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
                from: "oooshan94@gmail.com", // sender address
                to: email, // list of receivers
                subject: "Verification success!", // Subject line
                text: "", // plain text body
                html: Welcome_Email_Template.replace("{name}",name), // html body
              });
              console.log("Email send successfully");
  } catch (error) {
    console.log("Email error",error);
    
  }
};
