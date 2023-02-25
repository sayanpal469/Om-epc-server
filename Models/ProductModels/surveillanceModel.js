const mongoose = require('mongoose');

const surveillanceSchema = mongoose.Schema({
    modelNumber: {
        type: String,
        required: [true, 'Please enter product model number']
    },
    modelName: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
    },
    recordResolution: {
        type: String,
        required: [true, 'Please enter product record resolution']
    },
    color: {
        type: String,
        required: [true, 'Please enter product color']
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

module.exports = mongoose.model('surveillance', surveillanceSchema);