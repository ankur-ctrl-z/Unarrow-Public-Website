import mongoose from "mongoose";    

// This is the user schema
const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        match: [/^[A-Za-z]+$/, 'First name can only contain letters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        match: [/^[A-Za-z]+$/, 'Last name can only contain letters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        minLength: [10, 'Phone number must be at least 10 digits'],
        maxLength: [15, 'Phone number cant exceed 15 digits'],
        match: [/^\d+$/, 'Phone number must contain only digits']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    }
}, { timestamps: true });

// This is the user model
const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
