const User = require('../../Models/userModel')

// Create user
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            role: req.body.role,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
            image: req.file.filename,
        });
        let userData = await newUser.save();
        userData = userData.toObject();
        delete userData.password;
        res.status(200).json({
            success: true,
            userData,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


module.exports = {
    createUser
}