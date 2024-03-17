const express = require("express");
const { connectWithDB } = require("./dbConnection");
const { shortenUrl } = require("./shortenUrl");

const app = express();
const port = 3000;

/**
 * Establishes the connection with database
 */
// connectWithDB();

app.get("/api/shorten_url", (req, res) => {
  const shortUrl = shortenUrl(req.query);
  res.json({
    error_code: 0,
    message: "Here's the short url!",
    short_url: shortUrl,
  });
});

app.get("/api/analytics", (req, res) => {
  res.json({ message: "Fetching the analytics of the url!" });
});

app.get("/api/short_url_list", (req, res) => {
  res.json({ message: "Fetching all the short urls for you!" });
});

/**
 * Start the server and listen on the specified port
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
