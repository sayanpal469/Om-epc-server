const BuyProductForm = require('../Models/buyProductFormModel');


// Create request
const createBuyRequest = async (req, res) => {
    try {
        const newBuyRequest = await BuyProductForm.create(req.body);
        res.status(200).json({
            success: true,
            newBuyRequest,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get all request
const getAllBuyRequest = async (req, res) => {
    try {
        const allBuyRequest = await BuyProductForm.find();
        if (!allBuyRequest) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            res.status(200).json({
                success: true,
                allBuyRequest
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Get request by email
const getBuyRequestByEmail = async (req, res) => {
    try {
        const requestedUser = await BuyProductForm.find({
            email: req.params.email
        })
        if (!requestedUser) {
            res.status(404).json({
                success: false,
                message: 'User does not exist'
            })
        } else {
            res.status(200).json({
                success: true,
                requestedUser
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Update buy request
const updateBuyRequest = async (req, res) => {
    try {
        let responceStatus = await BuyProductForm.findById(req.params.id)
        if (!responceStatus) {
            res.status(404).json({
                success: false,
                message: 'Request not found'
            })
        } else {
            responceStatus = await BuyProductForm.findByIdAndUpdate(req.params.id, req.body, {
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
    createBuyRequest,
    getAllBuyRequest,
    getBuyRequestByEmail,
    updateBuyRequest
}