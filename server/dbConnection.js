const mongoose = require('mongoose')

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/short_url_gen'

const connectWithDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('MongoDB connected successfully')
    } catch (err) {
        console.error('Failed to connect to MongoDB', err)
        process.exit(1) // Exit the process with failure
    }
}

module.exports.connectWithDB = connectWithDB
