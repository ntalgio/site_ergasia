const mongoose = require('mongoose')

const subdcriberSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subdcriberSchema)