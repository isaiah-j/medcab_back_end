const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, "I need your username"],
        unique: true
    },
    password: {
        required: [true, 'Password is required']
    },
    confirmPassword: [true, "Please confirm your password"]
    // other fields
})

const User = mongoose.model('User', userSchema)

module.exports = User