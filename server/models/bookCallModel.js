import mongoose from "mongoose";


const bookCallSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        match: [/^[A-Za-z]+$/, 'First name can only contain letters']
    },

   lastName:{
        type:String,
        required: true,
        match: [/^[A-Za-z]+$/, 'First name can only contain letters']
    },

    email:{
        type:String,
        required: true,
        trim:true,
        unique:true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },

    phone:{
        type:String,
        required: true,
        minLength:[10,"phone number must be 10 digit"],
        maxLength:[15, "phone number can't exceed 15 digit"]
    },

    pinCode:{
        type:String,
        required: true,
        
    },

    serviceInquiry:{
        type:String,
        required: true,
    },

    message:{
        type:String,
        required:true
    },

},{timestamps:true});

// book a call model
const BookCall  = mongoose.model("BookCall", bookCallSchema);
export default BookCall;
