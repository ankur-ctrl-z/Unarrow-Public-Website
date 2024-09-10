import mongoose from "mongoose";
import dotenv, { configDotenv } from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

// Defining Schema

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  });


// Defining Model

const userModel = mongoose.model("userModel", UserSchema)

module.exports = {connectDB, userModel}
