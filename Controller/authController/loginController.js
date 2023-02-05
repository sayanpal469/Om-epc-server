const User = require('../../Models/userModel');

// find user
const getUser = async (req, res) => {
    try {
        if(req.body.email && req.body.password){
            let user = await User.findOne(req.body).select('-password')
            if(user) {
                res.status(200).json({
                    success: true,
                    user
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
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

module.exports = {
    getUser
}