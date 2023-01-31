const mongoose = require('mongoose');

const buyProductFormSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    modelNo: {
        type: Number,
        required: true
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
        required: [true, 'Please provide your email address']
    },
    contact: {
        type: Number,
        required: [true, 'Please provide your phone number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('buyProductUser', buyProductFormSchema)