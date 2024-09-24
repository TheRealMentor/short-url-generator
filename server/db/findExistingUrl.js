const Url = require('../schema/Url')

async function findExistingUrl(longUrl) {
    // Put shortUrlHash in DB if user is logged in!
    const url = await Url.findOne({ longUrl })
    return url
}

module.exports.findExistingUrl = findExistingUrl
