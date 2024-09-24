const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortUrlHash: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Url', UrlSchema)
