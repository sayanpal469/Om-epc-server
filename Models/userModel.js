var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    role: {
        type: String,
        default: 'user'
    },
    userName: {
        type: String,
        trim: true,
        required: [true, 'Please provide a user name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide your email']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please provide your password']
    },
    contact: {
        type: Number,
        trim: true,
        required: [true, 'Please provide your phone number']
    },
    image: {
        type: String,
        required: [true, 'Please provide your profile picture']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);