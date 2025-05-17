import Contact from "../models/contactModel.js";
   

const contactController = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Check if all fields are provided
        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required!'
            });
        }

        // Check if the email is already in use
        const existingUser = await Contact.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists!'
            });
        }

        // Create a new user/message entry
        const newUser = await Contact.create({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        // Successfully created
        return res.status(201).json({
            success: true,
            message: 'Message sent successfully!',
            newUser
        });
    } catch (error) {
        // Handle any server errors
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export default contactController;