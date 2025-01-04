import express from 'express';
import register from '../controller/Auth.js';
const AuthRouter=express.Router();

AuthRouter.post('/register',register);


export default AuthRouter;