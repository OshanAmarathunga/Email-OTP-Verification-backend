import express from 'express';
import dotenv from 'dotenv';
import DBcon from './libs/db.js';


dotenv.config();
DBcon();
const PORT=process.env.PORT;
const app=express();








app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})
