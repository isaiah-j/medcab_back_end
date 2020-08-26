const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, "I need your username"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        required: [true, 'Password is required']
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"]
    }
    // other fields
})

const User = mongoose.model('User', userSchema)

module.exports = User