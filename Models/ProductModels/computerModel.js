const mongoose = require('mongoose');

const computerSchema = mongoose.Schema({
    modelName: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    series: {
        type: String,
        required: [true, 'Please enter product series']
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
    },
    processor: {
        type: String,
        required: [true, 'Please enter product processor name']
    },
    processorBrand: {
        type: String,
        required: [true, 'Please enter product processor brand']
    },
    processorFrequency: {
        type: String,
        required: [true, 'Please enter product Processor Frequency']
    },
    operatingSystem: {
        type: String,
        required: [true, 'Please enter product Operating System']
    },
    processorModel: {
        type: String,
        required: [true, 'Please enter product Processor Model']
    },
    ram: {
        type: String,
        required: [true, 'Please enter product System Ram']
    },
    displaySize: {
        type: String,
        required: [true, 'Please enter product Display Size']
    },
    graphics: {
        type: String,
        required: [true, 'Please enter product Dedicated Graphic Memory']
    },

    hardDrive: {
        type: String,
        required: [true, 'Please enter product hard drive details']
    },
    ssdCapacity: {
        type: String,
        required: [true, 'Please enter product SSD Capacity details']
    },
    warranty: {
        type: Number,
        required: [true, 'Please enter product warranty']
    },
    image: {
        type: String,
        required: [true, 'Please provide product image']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price']
    },
    wrongPrice: {
        type: Number,
        required: [true, 'Please provide product wrong price']
    },
    category: {
        type: String,
        required: [true, 'Please provide product category']
    },
    color: {
        type: String,
        required: [true, 'Please provide product color']
    },
    description: {
        type: String,
        required: [true, 'Please provide product description']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('computer', computerSchema);