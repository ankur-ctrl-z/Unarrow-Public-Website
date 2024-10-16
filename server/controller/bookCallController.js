import BookCall from '../models/bookCallModel.js'

const BookACallController = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, pinCode, message } = req.body;

        // Check if all fields are provided
        if (!firstName || !lastName || !email || !phone || !pinCode || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required!'
            });
        }

        // Check if the email is already in use
        const existingUser = await BookCall.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists!'
            });
        }

        // Create a new user/message entry
        await BookCall.create({
            firstName,
            lastName,
            email,
            phone,
            pinCode,
            message
        });

        // Successfully created
        return res.status(201).json({
            success: true,
            message: 'Call booked successfully!'
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

export default  BookACallController;
