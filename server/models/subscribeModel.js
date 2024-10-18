import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

const Subscribe = mongoose.model ('Subscribe', subscribeSchema);
export default Subscribe;