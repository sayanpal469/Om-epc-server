const RefurbishedModel = require('../../Models/ProductModels/refurbishedModel');

// Create printer
const createRefurbishedProduct = async (req, res) => {
    try {
        // console.log(req.file)
        const data = await RefurbishedModel.create({
            type: req.body.type,
            modelName: req.body.modelName,
            brand: req.body.brand,
            image: req.file.filename,
            price: req.body.price,
            wrongPrice: req.body.wrongPrice,
            description: req.body.description
        });
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Get all products
const getAllRefurbishedProduct = async (req, res) => {
    try {
        const data = await RefurbishedModel.find()
        if (!data.length) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
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



// Get singel product
const getSingelRefurbished = async (req, res) => {
    try {
        const data = await RefurbishedModel.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
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


// Delete product
const deleteRefurbishedProduct = async (req, res) => {
    try {
        const data = await RefurbishedModel.findByIdAndDelete(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'printer not found'
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
};


module.exports = {
    createRefurbishedProduct,
    getAllRefurbishedProduct,
    getSingelRefurbished,
    deleteRefurbishedProduct
}