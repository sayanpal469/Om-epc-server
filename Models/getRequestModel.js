const mongoose = require('mongoose');

const getRequestSchema = mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    contact: {
        type: Number,
        required: [true, 'Please enter your mobile number']
    },
    message: {
        type: String,
        required: [true, 'Please write your message']
    },
    visitStatus: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('getRequestForm', getRequestSchema)