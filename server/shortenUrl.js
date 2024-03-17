const SHORT_URL_LENGTH = 10
const SHORT_URL_DATASET =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomString = (length, chars) => {
    var result = ''
    for (var i = length; i > 0; --i) {
        result += chars[Math.round(Math.random() * (chars.length - 1))]
    }
    return result
}

/**
 * NOTE: If we want to actually make use of the service then
 * we would need to make sure that domain is registered!
 */
const shortenUrl = (input) => {
    // Extract long url from input
    const { long_url } = input

    const shortUrlHash = randomString(SHORT_URL_LENGTH, SHORT_URL_DATASET)

    const res = `https://short.url/${shortUrlHash}`

    // Put shortUrlHash in DB if user is logged in!

    return res
}

module.exports.shortenUrl = shortenUrl
