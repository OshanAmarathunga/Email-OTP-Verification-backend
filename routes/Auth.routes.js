import express from 'express';
import { register, resendVerificationCode, verifyEmail } from '../controller/Auth.js';
const AuthRouter=express.Router();

AuthRouter.post('/register',register);
AuthRouter.post("/verify-email",verifyEmail )
AuthRouter.post('/resendVerificationCode',resendVerificationCode )


export default AuthRouter;