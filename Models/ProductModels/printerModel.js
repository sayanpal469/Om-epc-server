const mongoose = require('mongoose');

const printerSchema = mongoose.Schema({
    printingMethod: {
        type: String,
        required: [true, 'Please enter printing method']
    },
    type: {
        type: String,
        required: [true, 'Please enter printing type']
    },
    modelName: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    color: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
    },
    refilType: {
        type: String,
        required: [true, 'Please enter product refilType']
    },
    image: {
        type: String,
        required: [true, 'Please enter product image']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    wrongPrice: {
        type: Number,
        required: [true, 'Please enter product phase']
    },
    warranty: {
        type: Number,
        required: [true, 'Please enter product warranty']
    },
    description: {
        type: String,
        required: [true, 'Please enter product phase']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('printer', printerSchema);