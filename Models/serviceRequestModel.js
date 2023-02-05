const mongoose = require('mongoose');

const serviceRequestSchema = mongoose.Schema({
    collectionDate: {
        type: String,
        required: [true, 'Please provide date which you need']
    },
    slot: {
        type: String,
        required: [true, 'Please book a slot which you need']
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('serviceRequest', serviceRequestSchema);