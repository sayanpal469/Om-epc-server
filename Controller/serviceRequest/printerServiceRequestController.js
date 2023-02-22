const PrinterServiceRequest = require('../../Models/serviceRequestModels/printerServiceRequestModel');


// Create request
const createPrinterServiceRequest = async (req, res) => {
    try {
        const newRequest = await PrinterServiceRequest.create(req.body);
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
const getPrinterServiceRequest = async (req, res) => {
    try {
        const allServiceRequests = await PrinterServiceRequest.find();
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
const updatePrinterServiceStatus = async (req, res) => {
    try {
        let responceStatus = await PrinterServiceRequest.findById(req.params.id)
        if (!responceStatus) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            responceStatus = await PrinterServiceRequest.findByIdAndUpdate(req.params.id, req.body, {
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
    createPrinterServiceRequest,
    getPrinterServiceRequest,
    updatePrinterServiceStatus
}