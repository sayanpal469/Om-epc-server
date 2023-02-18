const Service = require('../Models/serviceModel');

// Create service
const createService = async (req, res) => {
    try {
        const newService = await Service.create({
            item: req.body.item,
            image: req.file.filename,
            category: req.body.category,
        });
        res.status(200).json({
            success: true,
            newService,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find()
        if (!services) {
            res.status(404).json({
                success: false,
                message: 'service not found'
            })
        } else {
            res.status(200).json({
                success: true,
                services
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get services by item
const getServicesByItem = async (req, res) => {
    try {
        const services = await Service.find({item: req.params.item})
        if (!services) {
            res.status(404).json({
                success: false,
                message: 'service not found'
            })
        } else {
            res.status(200).json({
                success: true,
                services
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get singel service
const getSingelService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
        if (!service) {
            res.status(404).json({
                success: false,
                message: 'Service not found'
            })
        } else {
            res.status(200).json({
                success: true,
                service
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// Delete Service
const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id)
        if (!service) {
            res.status(404).json({
                success: false,
                message: 'service not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Deleted successfully'
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
    createService,
    getServices,
    getServicesByItem,
    getSingelService,
    deleteService
}