const UserOrders = require('../Models/buyProductFormModel');
const UserModel = require('../Models/userModel');


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
        const userEmail = await UserModel.findOne({
            email: req.params.email
        })
        if (!userEmail) {
            res.status(404).json({
                success: false,
                message: 'User does not exist'
            })
        } else {
            const available = await UserOrders.find({
                email: req.params.email,
                isOrder: true
            });
            if (available.length) {
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

// Update Shipped order
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

// Update Complete order
const updateComplete = async (req, res) => {
    try {
        let data = await UserOrders.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
            })
        } else {
            if (data.isCompleted) {
                res.status(501).json({
                    success: false,
                    message: 'This order already completed'
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
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


// Cancel Order
const updateCanceled = async (req, res) => {
    try {
        let data = await UserOrders.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Order not found'
            })
        } else {
            if (data.isCompleted) {
                res.status(501).json({
                    success: false,
                    message: 'This order already completed, You can not cancel this order'
                })
            } else {
                if (data.isCanceled) {
                    res.status(502).json({
                        success: false,
                        message: 'This order already canceled'
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
            }
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
        const order = await UserOrders.findByIdAndDelete({
            _id: req.params.id
        })
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
    updateComplete,
    updateCanceled,
    deleteOrder
}