import mongoose from "mongoose";


const bookCallSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },

   lastName:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true
    },

    phone:{
        type:String,
        required: true,
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
