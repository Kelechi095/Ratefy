const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true
    }, 
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Rating', ratingSchema)