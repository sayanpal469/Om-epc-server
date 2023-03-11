const mongoose = require('mongoose');

const carrerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    contact: {
        type: Number,
        required: [true, 'Please provide your contact']
    },
    image: {
        type: String,
        required: [true, 'Please provide your name']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('carrerRequest', carrerSchema);