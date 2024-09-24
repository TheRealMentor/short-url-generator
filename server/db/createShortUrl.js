const Url = require('../schema/Url')

async function createShortUrl(longUrl, shortUrlHash) {
    // Put shortUrlHash in DB if user is logged in!
    const url = await Url.create({
        longUrl,
        shortUrlHash,
    })
    return url
}

module.exports.createShortUrl = createShortUrl
