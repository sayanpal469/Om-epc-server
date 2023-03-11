const mongoose = require('mongoose');

const computerServiceRequestSchema = mongoose.Schema({
    collectionDate: {
        type: String,
        required: [true, 'Please provide date which you need']
    },
    type: {
        type: String,
        default: 'computer'
    },
    category: {
        type: String,
        required: [true, 'Please provide service category']
    },
    item: {
        type: String,
        required: [true, 'Please provide service item']
    },
    brand: {
        type: String,
        required: [true, 'Please provide service brand']
    },
    operating: {
        type: String,
        required: [true, 'Please provide operating system']
    },
    clientName: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email']
    },
    contact: {
        type: Number,
        required: [true, 'Please provide your phone number']
    },
    address: {
        type: String,
        required: [true, 'Please provide your address']
    },
    city: {
        type: String,
        required: [true, 'Please provide your city']
    },
    pinCode: {
        type: Number,
        required: [true, 'Please provide your pin code']
    },
    message: {
        type: String,
        required: [true, 'Please provide your message']
    },
    isRequest: {
        type: Boolean,
        default: true
    },
    isCanceled: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('computerServiceRequest', computerServiceRequestSchema);