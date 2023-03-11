const SurveillanceServiceRequest = require('../../Models/serviceRequestModels/surveillanceServiceRequestModel');
const UserModel = require('../../Models/userModel');


// Create request
const createSurveillanceServiceRequest = async (req, res) => {
    try {
        const newRequest = await SurveillanceServiceRequest.create(req.body);
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
const getSurveillanceServiceRequest = async (req, res) => {
    try {
        const allServiceRequests = await SurveillanceServiceRequest.find();
        if(!allServiceRequests.length) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
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



// Get service requests by email
const getSurveillanceServiceRequestByEmail = async (req, res) => {
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
            const data = await SurveillanceServiceRequest.find({
                email: req.params.email,
                isRequest: true
            });
            if (data.length) {
                res.status(200).json({
                    success: true,
                    data
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
const completeSurveillanceServiceRequest = async (req, res) => {
    try {
        let data = await SurveillanceServiceRequest.findById(req.params.id)
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
                data = await SurveillanceServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
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
const cancelSurveillanceServiceRequest = async (req, res) => {
    try {
        let data = await SurveillanceServiceRequest.findById(req.params.id)
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
                    data = await SurveillanceServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
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
    createSurveillanceServiceRequest,
    getSurveillanceServiceRequest,
    getSurveillanceServiceRequestByEmail,
    completeSurveillanceServiceRequest,
    cancelSurveillanceServiceRequest
}