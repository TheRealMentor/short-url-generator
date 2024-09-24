const express = require('express')
const { connectWithDB } = require('./dbConnection')
const { shortenUrl } = require('./api')

const app = express()
const port = 3000

/**
 * Middleware
 */
app.use(express.json())

/**
 * Establishes the connection with database
 */
connectWithDB()

/**
 * Routes
 */
app.get('/api/shorten_url', shortenUrl)

/**
 * Start the server and listen on the specified port
 */
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
