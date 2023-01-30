const GetRequestForm = require('../Models/getRequestModel');


// Create request
const createGetRequest = async (req, res) => {
    try {
        const newRequest = await GetRequestForm.create(req.body);
        res.status(201).json({
            success: true,
            newRequest
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


// Get All Request
const getAllRequest = async (req, res) => {
    try {
        const allRequest = await GetRequestForm.find()
        if(!allRequest) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        }

        res.status(201).json({
            success: true,
            allRequest
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Get Request by email
const getRequestByEmail = async (req, res) => {
    try {
        const getRequestClient = await GetRequestForm.find({
            email: req.params.email
        })
        if(!getRequestClient) {
           res.status(404).json({
                success: false,
                message: 'Get request user not found'
            })
        }
        res.status(201).json({
            success: true,
            getRequestClient
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createGetRequest,
    getAllRequest,
    getRequestByEmail
}