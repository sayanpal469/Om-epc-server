const Surveillance = require('../../Models/ProductModels/surveillanceModel');

// Create surveillance
const createSurveillance = async (req, res) => {
    try {
        // console.log(req.file)
        const newProduct = await Surveillance.create({
            modelNumber: req.body.modelNumber,
            modelName: req.body.modelName,
            brand: req.body.brand,
            recordResolution: req.body.recordResolution,
            color: req.body.color,
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


// Get all surveillances
const getSurveillance = async (req, res) => {
    try {
        const surveillance = await Surveillance.find()
        if (!surveillance) {
            res.status(404).json({
                success: false,
                message: 'surveillance not found'
            })
        } else {
            res.status(200).json({
                success: true,
                surveillance
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};



// Get singel surveillance
const getSingelSurveillance = async (req, res) => {
    try {
        const surveillance = await Surveillance.findById(req.params.id)
        if (!surveillance) {
            res.status(404).json({
                success: false,
                message: 'surveillance not found'
            })
        } else {
            res.status(200).json({
                success: true,
                surveillance
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


// Delete surveillance
const deleteSurveillance = async (req, res) => {
    try {
        const surveillance = await Surveillance.findByIdAndDelete(req.params.id)
        if (!surveillance) {
            res.status(404).json({
                success: false,
                message: 'surveillance not found'
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
    createSurveillance,
    getSurveillance,
    getSingelSurveillance,
    deleteSurveillance
}