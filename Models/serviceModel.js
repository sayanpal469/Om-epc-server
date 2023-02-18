const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    item: {
        type: String,
        default: 'computer'
    },
    category: {
        type: String,
        required: [true, 'Please provide service category']
    },
    image: {
        type: String,
        required: [true, 'Please provide service image']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('services', serviceSchema);