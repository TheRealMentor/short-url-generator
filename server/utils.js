const SHORT_URL_LENGTH = 10
const SHORT_URL_DATASET =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomString = () => {
    var result = ''
    for (var i = SHORT_URL_LENGTH; i > 0; --i) {
        result +=
            SHORT_URL_DATASET[
                Math.round(Math.random() * (SHORT_URL_DATASET.length - 1))
            ]
    }
    return result
}

const getShortUrlFromHash = (hash) => {
    return `https://short.url/${hash}`
}

module.exports = {
    randomString,
    getShortUrlFromHash,
}
