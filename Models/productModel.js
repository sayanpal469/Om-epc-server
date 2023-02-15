const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name']
    },
    modelNo: {
        type: Number,
        required: [true, 'Please provide product model number']
    },
    image: {
        type: String,
        required: [true, 'Please provide product image']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products', productSchema);