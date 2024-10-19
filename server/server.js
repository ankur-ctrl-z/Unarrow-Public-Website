import express from 'express';
import db from './db';
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

