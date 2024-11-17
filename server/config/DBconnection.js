import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB database successfully!');
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error.message);
    }
}

export default DBconnection;
