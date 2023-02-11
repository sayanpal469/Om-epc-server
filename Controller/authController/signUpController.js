const User = require('../../Models/userModel')

// Create user
const createUser = async (req, res) => {
    try {
        const checkExistsEmail = await User.findOne({
            email: req.body.email
        })
        if (checkExistsEmail) {
            res.status(501).json({
                success: false,
                message: 'This email is already exists'
            })
        } else {
            const userData = await User.create({
                role: req.body.role,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact,
            });
            // let userData = await newUser.save();
            // userData = userData.toObject();
            // delete userData.password;
            res.status(200).json({
                success: true,
                userData,
            });
        }
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