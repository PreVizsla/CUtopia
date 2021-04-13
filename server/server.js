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

const DB = 'mongodb+srv://figo24:figo240301@cluster0.r8gzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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


// Then pass them to cors:
app.use(cors());

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

//connectDB();


app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Connecting Routes
app.use("/auth", require("./routes/auth"));
// app.use("/api/post", require("./routes/post"));
// app.use("/api/message", require("./routes/message"));


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

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


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});