require('dotenv').config({ path: "./config.env" });

const mongoose = require('mongoose');
const dotenv = require("dotenv");

const express = require("express");
const app = express();

const DB = 'mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yuaqn.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('connection successful');
}).catch((err) => console.log('no connection'));


//const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

//connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
