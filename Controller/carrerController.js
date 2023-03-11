const CarrerModel = require('../Models/carrerModel');


// Create product
const createCarrerRequest = async (req, res) => {
    try {
        // console.log(req.file)
        const data = await CarrerModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            image: req.file.filename,
        });
        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Request
const getAllCarrerRequest = async (req, res) => {
    try {
        const data = await CarrerModel.find()
        if (!data.length) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        }

        res.status(201).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};


module.exports = {
    createCarrerRequest,
    getAllCarrerRequest
}