const AccesoriesModel = require('../../Models/ProductModels/accesoriesModel');

// Create product
const createProduct = async (req, res) => {
    try {
        // console.log(req.file)
        const data = await AccesoriesModel.create({
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
const getAllProducts = async (req, res) => {
    try {
        const data = await AccesoriesModel.find()
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
}

// Get singel product
const getSingelProduct = async (req, res) => {
    try {
        const data = await AccesoriesModel.findById(req.params.id)
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
}


// Get product by category
const getProductsByType = async (req, res) => {
    try {
        const data = await AccesoriesModel.find({
            type: req.params.type
        })
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
}

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const data = await AccesoriesModel.findByIdAndDelete({
            _id: req.params.id
        })
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Product deleted',
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
    createProduct,
    getAllProducts,
    getSingelProduct,
    getProductsByType,
    deleteProduct
};