const mongoose = require("mongoose");

const connectWithDB = () => {
  mongoose.connect("<your-db-url>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports.connectWithDB = connectWithDB;
