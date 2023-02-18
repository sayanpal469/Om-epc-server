const ComputerServiceRequest = require('../../Models/serviceRequestModels/computerServiceRequest');


// Create request
const createComputerServiceRequest = async (req, res) => {
    try {
        const newRequest = await ComputerServiceRequest.create(req.body);
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

// Get all service request
const getComputerServiceRequest = async (req, res) => {
    try {
        const allServiceRequests = await ComputerServiceRequest.find();
        if(!allServiceRequests) {
            res.status(404).json({
                success: false,
                message: 'Service request not found'
            })
        } else {
            res.status(200).json({
                success: true,
                allServiceRequests
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Update service request
const updateComputerServiceStatus = async (req, res) => {
    try {
        let responceStatus = await ComputerServiceRequest.findById(req.params.id)
        if (!responceStatus) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            responceStatus = await ComputerServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            res.status(200).json({
                success: true,
                responceStatus
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
    createComputerServiceRequest,
    getComputerServiceRequest,
    updateComputerServiceStatus
}