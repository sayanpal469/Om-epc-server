const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Please provide service image']
    },
    category: {
        type: String,
        required: [true, 'Please provide service category']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('services', serviceSchema);