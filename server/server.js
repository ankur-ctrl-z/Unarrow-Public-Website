import express from "express";
import dotenv from 'dotenv'
// import cookieParser from "cookie-parser";
import cors from 'cors';
const app  = express();
import contactRouter from './route/contactRouter.js'
import DBconnection from "./config/DBconnection.js";

dotenv.config();
const PORT = process.env.PORT || 4000

app.use(cors({
    origin:' http://localhost:3000',
    methods: ['POST','GET'],
    credentials:true
}))

// app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// default route
app.use('/api',contactRouter)


app.listen(PORT, ()=>{
    DBconnection();
    console.log(`server is running on port : ${PORT}`)
})