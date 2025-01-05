import express from 'express';
import { register, verifyEmail } from '../controller/Auth.js';
const AuthRouter=express.Router();

AuthRouter.post('/register',register);
AuthRouter.post("/verify-email",verifyEmail )


export default AuthRouter;