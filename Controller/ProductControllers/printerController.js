const Printer = require('../../Models/ProductModels/printerModel');

// Create printer
const createPrinter = async (req, res) => {
    try {
        // console.log(req.file)
        const newProduct = await Printer.create({
            printingMethod: req.body.printingMethod,
            type: req.body.type,
            modelName: req.body.modelName,
            color: req.body.color,
            brand: req.body.brand,
            refilType: req.body.refilType,
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


// Get all printers
const getPrinters = async (req, res) => {
    try {
        const printers = await Printer.find()
        if (!printers) {
            res.status(404).json({
                success: false,
                message: 'printer not found'
            })
        } else {
            res.status(200).json({
                success: true,
                printers
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};



// Get singel printer
const getSingelPrinter = async (req, res) => {
    try {
        const printer = await Printer.findById(req.params.id)
        if (!printer) {
            res.status(404).json({
                success: false,
                message: 'printer not found'
            })
        } else {
            res.status(200).json({
                success: true,
                printer
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


// Delete printer
const deletePrinter = async (req, res) => {
    try {
        const printer = await Printer.findByIdAndDelete(req.params.id)
        if (!printer) {
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
}

module.exports = {
    createPrinter,
    getPrinters,
    getSingelPrinter,
    deletePrinter
}