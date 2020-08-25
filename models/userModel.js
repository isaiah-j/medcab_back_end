const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {

    },
    password: {

    }
    // other fields
})

const User = mongoose.model('User', userSchema)

module.exports = User