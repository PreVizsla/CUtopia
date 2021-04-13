require('dotenv').config({ path: "./config.env" });

const mongoose = require('mongoose');
const dotenv = require("dotenv");
const path = require('path');
const cors = require('cors');

const express = require("express");
const http = require("http");
const app = express();

const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer, { pingTimeout: 60000 });

const DB = 'mongodb+srv://adi:admin@cutopiacluster.xnzpe.mongodb.net/CUtopiaDB?retryWrites=true&w=majority'

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

app.use(express.static(path.join(__dirname, '../server')))
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/post", require("./routes/post"));
// app.use("/api/message", require("./routes/message"));


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = httpServer.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);


// put it here (starting from io.on("connection"))

io.on("connection", socket => {

    socket.on("setup", userData => {
        socket.join(userData._id);
        socket.emit("connected");
    })

    socket.on("join room", room => socket.join(room));
    socket.on("typing", room => socket.in(room).emit("typing"));
    socket.on("stop typing", room => socket.in(room).emit("stop typing"));
    socket.on("notification received", room => socket.in(room).emit("notification received"));

    socket.on("new message", newMessage => {
        var chat = newMessage.chat;

        if(!chat.users) return console.log("Chat.users not defined");

        chat.users.forEach(user => {
            
            if(user._id == newMessage.sender._id) return;
            socket.in(user._id).emit("message received", newMessage);
        })
    });

    socket.on("call-user", call => {
      var call = call.call;
      if (!call.users) return console.log("Call.users not defined");
      call.users.forEach(user => {
        if (user._id == newMessage.sender._id) return;
        socket.to(user._id).emit("call-made", call);
      })
    })

    socket.on("make-answer", data => {
      socket.to(data.to).emit("answer-made", {
        socket: userId,
        answer: data.answer
      });
    });

})

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});