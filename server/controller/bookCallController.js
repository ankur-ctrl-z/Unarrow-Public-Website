import BookCall from '../models/bookCallModel.js'

const BookACallController = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, pinCode, message, serviceInquiry} = req.body;

        // Check if all fields are provided
        if (!firstName || !lastName || !email || !phone || !pinCode || !message || !serviceInquiry) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required!'
            });
        }

        // Check if any email is already in use
        const existingUser = await BookCall.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists!'
            });
        }

        // Create a new user
        await BookCall.create({
            firstName,
            lastName,
            email,
            phone,
            pinCode,
            serviceInquiry,
            message
        });

        // Successfully created
        return res.status(201).json({
            success: true,
            message: "We'll connect you soon!"
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
