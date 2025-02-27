import express from 'express';
import dotenv from 'dotenv';
import DBcon from './libs/db.js';
import AuthRouter from './routes/Auth.routes.js';
import cors from 'cors';

dotenv.config();
DBcon();
const PORT=process.env.PORT;
const app=express();
app.use(express.json())
app.use(cors())

app.use('/auth',AuthRouter)  



app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})