const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name']
    },
    image: {
        type: String,
        required: [true, 'Please provide product image']
    },
    modelNo: {
        type: Number,
        required: [true, 'Please provide product model number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products', productSchema);