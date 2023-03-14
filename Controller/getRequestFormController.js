const GetRequestForm = require('../Models/getRequestModel');
const UserModel = require('../Models/userModel');


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
        if (!allRequest.length) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            res.status(201).json({
                success: true,
                allRequest
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Get Request by email
const getRequestByEmail = async (req, res) => {
    try {
        const request = await GetRequestForm.find({
            email: req.params.email
        })
        if (!request.length) {
            res.status(405).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            res.status(201).json({
                success: true,
                request
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// Update responce
const updateGetRequest = async (req, res) => {
    try {
        let responseStatus = await GetRequestForm.findById(req.params.id)
        if (!responseStatus) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            responseStatus = await GetRequestForm.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            res.status(200).json({
                success: true,
                responseStatus
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createGetRequest,
    getAllRequest,
    getRequestByEmail,
    updateGetRequest
}