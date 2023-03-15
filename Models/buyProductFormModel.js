const mongoose = require('mongoose');

const userOrders = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name']
    },
    address: {
        type: String,
        required: [true, 'Please provide your street address']
    },
    city: {
        type: String,
        required: [true, 'Please provide your city']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address']
    },
    contact: {
        type: Number,
        required: [true, 'Please provide your phone number']
    },
    postCode: {
        type: Number,
        required: [true, 'Please provide your phone number']
    },
    Quantity: {
        type: Number,
        default: 1
    },
    totalBill: {
        type: Number,
    },
    product: {
        type: Object
    },
    isOrder: {
        type: Boolean,
        default: true
    },
    isApproved: {
        type: Boolean,
        default: true
    },
    isShipped: {
        type: Boolean,
        default: false
    },
    isCanceled: {
        type: Boolean,
        default: false
    },
    outOfDelivery: {
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
})

module.exports = mongoose.model('userOrder', userOrders)