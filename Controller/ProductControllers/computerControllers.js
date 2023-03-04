const Computers = require('../../Models/ProductModels/computerModel');

// Create computer
const createComputer = async (req, res) => {
    try {
        // console.log(req.file)
        const data = await Computers.create({
            modelName: req.body.modelName,
            series: req.body.series,
            brand: req.body.brand,
            processor: req.body.processor,
            processorBrand: req.body.processorBrand,
            processorFrequency: req.body.processorFrequency,
            processorModel: req.body.processorModel,
            operatingSystem: req.body.operatingSystem,
            ram: req.body.ram,
            displaySize: req.body.displaySize,
            graphics: req.body.graphics,
            hardDrive: req.body.hardDrive,
            ssdCapacity: req.body.ssdCapacity,
            warranty: req.body.warranty,
            image: req.file.filename,
            price: req.body.price,
            wrongPrice: req.body.wrongPrice,
            category: req.body.category,
            color: req.body.color,
            description: req.body.description
        });
        res.status(200).json({
            success: true,
            data,
            message: 'Product created successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get all comuter
const getComputers = async (req, res) => {
    try {
        const data = await Computers.find()
        if (!data.length) {
            res.status(404).json({
                success: false,
                message: 'computer not found'
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


// Get singel computer
const getSingelComputer = async (req, res) => {
    try {
        const data = await Computers.findById(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'Computer not found'
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

// Delete computer
const deleteComputer = async (req, res) => {
    try {
        const data = await Computers.findByIdAndDelete(req.params.id)
        if (!data) {
            res.status(404).json({
                success: false,
                message: 'computer not found'
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
    createComputer,
    getComputers,
    getSingelComputer,
    deleteComputer
}