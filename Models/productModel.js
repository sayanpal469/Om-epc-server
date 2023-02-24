const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name']
    },
    model: {
        type: String,
        required: [true, 'Please provide product model name']
    },
    image: {
        type: String,
        required: [true, 'Please provide product image']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price']
    },
    category: {
        type: String,
        required: [true, 'Please provide product category']
    },
    brand: {
        type: String,
        required: [true, 'Please provide product brand']
    },
    description: {
        type: String,
        required: [true, 'Please provide product description']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products', productSchema);