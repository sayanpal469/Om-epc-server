const UserOrders = require('../Models/buyProductFormModel');


// Create request
const createBuyRequest = async (req, res) => {
    try {
        const data = await UserOrders.create(req.body);
        res.status(200).json({
            success: true,
            data
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
        const data = await UserOrders.find();
        // console.log(data)
        if (!data.length) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
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
        });
    }
}

// Get request by email
const getBuyRequestByEmail = async (req, res) => {
    try {
        const userEmail = await UserOrders.find({
            email: req.params.email
        })
        if (!userEmail) {
            res.status(404).json({
                success: false,
                message: 'User does not exist'
            })
        } else {
            const available = await UserOrders.find({ email: req.params.email, isOrder: true});
            if (available.length) {
                // const orderProducts = available.filter(product => product.product)
                // console.log(orderProducts)
                res.status(200).json({
                    success: true,
                    available
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Order not found'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Update buy request
const updateShipped = async (req, res) => {
    try {
        let data = await UserOrders.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
            })
        } else {
            data = await UserOrders.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
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

const updateCanceled = async (req, res) => {
    try {
        let data = await UserOrders.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
            })
        } else {
            data = await UserOrders.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            res.status(200).json({
                success: true,
                message: 'Order Canceled'
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};



const deleteOrder = async (req, res) => {
    try {
        const order = await UserOrders.findByIdAndDelete({_id: req.params.id})
        if (!order) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Order deleted'
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
    updateShipped,
    updateCanceled,
    deleteOrder
}