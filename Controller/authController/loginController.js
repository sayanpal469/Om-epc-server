const User = require('../../Models/userModel');
// .select('-password')
// find user
const getUser = async (req, res) => {
    try {
        // let msg;
        if (req.body.email && req.body.password) {
            let user = await User.findOne({email: req.body.email});
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

module.exports = {
    getUser
}