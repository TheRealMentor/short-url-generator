const express = require("express");
const { connectWithDB } = require("./dbConnection");

const app = express();
const port = 3000;

/**
 * Establishes the connection with database
 */
// connectWithDB();

app.get("/api/shorten_url", (req, res) => {
  res.json({ message: "Generating short url!" });
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
