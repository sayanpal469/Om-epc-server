const User = require('../../Models/userModel');


// find user
const userLogin = async (req, res) => {
    try {
        // let msg;
        if (req.body.email && req.body.password) {
            let user = await User.findOne({
                email: req.body.email
            });
            // console.log(user.password)
            if (user) {
                if (req.body.password == user.password) {
                    return res.status(200).json({
                        success: true,
                        user
                    })
                } else {
                    return res.status(401).json({
                        message: "Invalid Password!"
                    })

                }
            } else {
                res.status(402).json({
                    success: false,
                    message: 'This email does not exists'
                })
            }
        } else {
            res.status(500).json({
                message: 'Please fill the inputs'
            })
        }
    } catch (error) {
        res.status(501).json({
            success: false,
            message: 'User not found'
        })
    }
}


// Get all user
const getUsers = async (req, res) => {
    try {
        const user = await User.findOne({email: req.params.email})

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        } else {
            res.status(200).json({
                success: true,
                user
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    userLogin,
    getUsers
}