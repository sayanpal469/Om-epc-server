const User = require('../../Models/userModel');

const checkEmail = async (req, res) => {
    try {
        let userEmail = await User.findOne({
            email: req.body.email
        })

        if (req.body.email) {
            if (!userEmail) {
                return res.status(400).json({
                    success: false,
                    message: 'This email does not exist'
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Thank you, now you can change your password'
                })
            }
        } else {
            res.status(401).json({
                message: 'Please enter your email'
            })
        }
    } catch (error) {
        res.status(502).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = checkEmail;