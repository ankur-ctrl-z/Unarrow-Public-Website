<<<<<<< HEAD
import express from 'express';
import bodyParser from 'body-parser';
import {connectDB, userModel} from './db';

const app = express();

connectDB();

app.use(bodyParser.json())

app.post('/submit', async function(req,res){
    const { firstName, lastName, email, message } = req.body;

    try {
        const data = new userModel({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        await data.save();
        res.status(201).json({ message: 'Message saved successfully' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save message' });
    }

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server is running on port &{PORT}`)})

=======
import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';

const app = express();
import contactRouter from './route/contactRouter.js'
import bockCallRouter from './route/bookCallRouter.js'
import DBconnection from "./config/DBconnection.js";

dotenv.config();
const PORT = process.env.PORT || 4000

app.use(cors({
    origin:'http://localhost:3000',
    methods:['POST','GET'],
    credentials:true
}))

// app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// default route
app.use('/api',contactRouter)
app.use('/api',bockCallRouter)


app.listen(PORT, ()=>{
    DBconnection();
    console.log(`server is running on port : ${PORT}`)
})
>>>>>>> upstream/main
