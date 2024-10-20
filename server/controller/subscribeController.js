import Subscribe from "../models/subscribeModel.js";

const subscribeController = async(req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.status(400).json({
            success:false,
            message:'Please,Enter your email!'
        })   
    }

    const existingEmail = await Subscribe.findOne({email});

    if(existingEmail){
        return res.status(409).json({
            success:false,
            message:'Email already exists!'
        })
    }

    await Subscribe.create({email});

    return res.status(201).json({
        success:true,
        message:"subscribed successfully!"
    })
}

export default subscribeController;