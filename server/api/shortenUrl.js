const { createShortUrl } = require('../db/createShortUrl')
const { findExistingUrl } = require('../db/findExistingUrl')
const { getShortUrlFromHash, randomString } = require('../utils')

const processShortUrl = async (longUrl) => {
    // Long URL must exist
    if (!longUrl) {
        return {
            errorCode: 1,
            errorMessage: 'Long URL is required',
            shortUrl: null,
        }
    }

    // If short url already exists, return that
    const existingUrl = await findExistingUrl(longUrl)
    if (existingUrl) {
        return {
            errorCode: 0,
            errorMessage: '',
            shortUrl: getShortUrlFromHash(existingUrl.shortUrlHash),
        }
    }

    try {
        // Generate random string for short url
        const shortUrlHash = randomString()

        // Save in MongoDB
        await createShortUrl(longUrl, shortUrlHash)

        return {
            errorCode: 0,
            errorMessage: '',
            shortUrl: getShortUrlFromHash(shortUrlHash),
        }
    } catch (error) {
        return {
            errorCode: 2,
            errorMessage: 'Error creating short URL',
            shortUrl: null,
        }
    }
}

const shortenUrl = async (req, res) => {
    const { long_url: longUrl } = req.query
    const { errorCode, errorMessage, shortUrl } = await processShortUrl(longUrl)

    if (errorCode) {
        // If there's an error, handle it!
        return res
            .status(400)
            .json({ error_code: errorCode, message: errorMessage })
    }

    res.status(200).json({
        error_code: errorCode,
        message: "Here's the short url!",
        short_url: shortUrl,
    })
}

module.exports.shortenUrl = shortenUrl
