const ServiceRequest = require('../Models/serviceRequestModel');


// Create request
const createServiceRequest = async (req, res) => {
    try {
        const newRequest = await ServiceRequest.create(req.body);
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



module.exports = {
    createServiceRequest
}