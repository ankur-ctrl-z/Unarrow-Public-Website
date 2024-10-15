import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB database successfully!');
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error.message);
    }
}

export default DBconnection;
