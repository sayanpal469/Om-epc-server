const mongoose = require('mongoose');

const upsSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
    },
    modelNumber: {
        type: String,
        required: [true, 'Please enter product model number']
    },
    modelName: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    color: {
        type: String,
        required: [true, 'Please enter product color']
    },
    inputVoltage: {
        type: String,
        required: [true, 'Please enter product input voltage']
    },
    outputVoltage: {
        type: String,
        required: [true, 'Please enter product output voltage']
    },
    outputPlugsNumber: {
        type: Number,
        required: [true, 'Please enter product output plugs number']
    },
    phase: {
        type: String,
        required: [true, 'Please enter product phase']
    },
    batteriesNumber: {
        type: Number,
        required: [true, 'Please enter product batteries number']
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

module.exports = mongoose.model('ups', upsSchema);