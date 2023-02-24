const Products = require('../Models/productModel');

// Create product
const createProduct = async (req, res) => {
    try {
        // console.log(req.file)
        const newProduct = await Products.create({
            name: req.body.name,
            model: req.body.model,
            image: req.file.filename,
            price: req.body.price,
            category: req.body.category,
            brand: req.body.brand,
            description: req.body.description,
        });
        res.status(200).json({
            success: true,
            newProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        if (!products) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        } else {
            res.status(200).json({
                success: true,
                products
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
        const product = await Products.findById(req.params.id)
        if (!product) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        } else {
            res.status(200).json({
                success: true,
                product
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
const getProductsByCategory = async (req, res) => {
    try {
        const products = await Products.find({category: req.params.category})
        if (!products) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        } else {
            res.status(200).json({
                success: true,
                products
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
        const product = await Products.findByIdAndDelete({_id: req.params.id})
        if (!product) {
            res.status(404).json({
                success: false,
                message: 'Not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Product deleted',
                product
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
    getProducts,
    getSingelProduct,
    getProductsByCategory,
    deleteProduct
};