const mongoose = require('mongoose');

const refurbishedSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Please enter printing type']
    },
    modelName: {
        type: String,
        required: [true, 'Please enter product model name']
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand']
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
        required: [true, 'Please enter product wrong price']
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

module.exports = mongoose.model('refurbishedProduct', refurbishedSchema);