const UPS = require('../../Models/ProductModels/upsModel');

// Create ups
const createUps = async (req, res) => {
    try {
        // console.log(req.file)
        const newProduct = await UPS.create({
            brand: req.body.brand,
            modelNumber: req.body.modelNumber,
            modelName: req.body.modelName,
            color: req.body.color,
            inputVoltage: req.body.inputVoltage,
            outputVoltage: req.body.outputVoltage,
            outputPlugsNumber: req.body.outputPlugsNumber,
            phase: req.body.phase,
            batteriesNumber: req.body.batteriesNumber,
            image: req.file.filename,
            price: req.body.price,
            wrongPrice: req.body.wrongPrice,
            warranty: req.body.warranty,
            description: req.body.description
        });
        res.status(200).json({
            success: true,
            newProduct,
            message: 'Product created successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Get all Upses
const getUpses = async (req, res) => {
    try {
        const upses = await UPS.find()
        if (!upses) {
            res.status(404).json({
                success: false,
                message: 'ups not found'
            })
        } else {
            res.status(200).json({
                success: true,
                upses
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};



// Get singel ups
const getSingelUps = async (req, res) => {
    try {
        const ups = await UPS.findById(req.params.id)
        if (!ups) {
            res.status(404).json({
                success: false,
                message: 'ups not found'
            })
        } else {
            res.status(200).json({
                success: true,
                ups
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


// Delete ups
const deleteUps = async (req, res) => {
    try {
        const ups = await UPS.findByIdAndDelete(req.params.id)
        if (!ups) {
            res.status(404).json({
                success: false,
                message: 'ups not found'
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
    createUps,
    getUpses,
    getSingelUps,
    deleteUps
}