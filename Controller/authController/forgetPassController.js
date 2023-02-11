const User = require('../../Models/userModel')

const changePassword = async (req, res) => {
    try {
        const userEmail = await User.findOne({
            email: req.params.email
        })

        if (!userEmail) {
            res.status(404).json({
                success: false,
                message: 'Email not found'
            })
        } else {
            if (req.body.password) {
                await User.findOneAndUpdate({
                    email: req.params.email
                }, {
                    password: req.body.password
                })
                res.status(200).json({
                    success: true,
                    message: 'Your password is being updated'
                })
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please enter a password'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = changePassword;