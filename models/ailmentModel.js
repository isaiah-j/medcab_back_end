const mongoose = require('mongoose')


const ailmentSchema = new mongoose.Schema({
    name: {

    },
    description: {

    },
    // other fields
})

const Ailment = mongoose.model('Ailment', userSchema)