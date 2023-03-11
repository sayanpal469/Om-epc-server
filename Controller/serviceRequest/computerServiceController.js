const ComputerServiceRequest = require('../../Models/serviceRequestModels/computerServiceRequest');
const UserModel = require('../../Models/userModel')


// Create request
const createComputerServiceRequest = async (req, res) => {
    try {
        const data = await ComputerServiceRequest.create(req.body);
        res.status(201).json({
            success: true,
            data
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
        const data = await ComputerServiceRequest.find();
        if (!data.length) {
            res.status(404).json({
                success: false,
                message: 'Service request not found'
            })
        } else {
            res.status(200).json({
                success: true,
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


// Get service requests by email
const getComputerServiceRequestByEmail = async (req, res) => {
    try {
        const userEmail = await UserModel.findOne({
            email: req.params.email
        })
        if (!userEmail) {
            res.status(404).json({
                success: false,
                message: 'User does not exist'
            })
        } else {
            const serviceRequest = await ComputerServiceRequest.find({
                email: req.params.email,
                isRequest: true
            });
            if (serviceRequest.length) {
                res.status(200).json({
                    success: true,
                    serviceRequest
                })
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Request not found'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};



// Complete service request
const completeComputerServiceRequestStatus = async (req, res) => {
    try {
        let data = await ComputerServiceRequest.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            if (data.isCompleted) {
                res.status(501).json({
                    success: false,
                    message: 'This request already completed'
                })
            } else {
                data = await ComputerServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
                    new: true
                })
                res.status(200).json({
                    success: true,
                    data
                })
            }

        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

// Cancel service request
const cancelComputerRequest = async (req, res) => {
    try {
        let data = await ComputerServiceRequest.findById(req.params.id)
        // console.log(data)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            if (data.isCompleted) {
                res.status(501).json({
                    success: false,
                    message: 'This request already completed, You can not cancel this request'
                })
            } else {
                if (data.isCanceled) {
                    res.status(502).json({
                        success: false,
                        message: 'This request already canceled'
                    })
                } else {
                    data = await ComputerServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
                        new: true
                    })
                    res.status(200).json({
                        success: true,
                        data
                    })
                }

            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    createComputerServiceRequest,
    getComputerServiceRequest,
    getComputerServiceRequestByEmail,
    completeComputerServiceRequestStatus,
    cancelComputerRequest
}