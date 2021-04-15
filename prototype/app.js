// listing out the devDependencies and dependencies of project
const express = require('express');
const app = express();
const port = 3006;
const middleware = require('./middleware');
const path = require('path');
const mongoose = require("./database");
const session = require("express-session");

const server = app.listen(port, () => console.log("Server listening on port "+port));
const io = require("socket.io")(server, { pingTimeout: 60000 });

//to retrieve the value of view engine & views in the template pug files
app.set("view engine", "pug");
app.set("views", "pugviews");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "CUtopia Secret",
    resave: true,
    saveUninitialized: false
}));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logoutRoutes');
const postRoute = require('./routes/postRoutes');
const profileRoute = require('./routes/profileRoutes');
const uploadRoute = require('./routes/uploadRoutes');
const searchRoute = require('./routes/searchRoutes');
const messagesRoute = require('./routes/messagesRoutes');
const notificationsRoute = require('./routes/notificationRoutes');

const requestReset = require("./routes/requestReset");
const passwordReset = require("./routes/passwordReset");

// Api Routes
const postsApiRoute = require('./routes/api/posts');
const usersApiRoute = require('./routes/api/users');
const chatsApiRoute = require('./routes/api/chats');
const messagesApiRoute = require('./routes/api/messages');
const notificationsApiRoute = require('./routes/api/notifications');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/posts", middleware.requireLogin, postRoute);
app.use("/logout", logoutRoute);
app.use("/profile", middleware.requireLogin, profileRoute);
app.use("/uploads", uploadRoute);
app.use("/search", middleware.requireLogin, searchRoute);
app.use("/messages", middleware.requireLogin, messagesRoute);
app.use("/notifications", middleware.requireLogin, notificationsRoute);

app.use("/requestReset", requestReset);
app.use("/passwordReset", passwordReset);

app.use("/api/posts", postsApiRoute);
app.use("/api/users", usersApiRoute);
app.use("/api/chats", chatsApiRoute);
app.use("/api/messages", messagesApiRoute);
app.use("/api/notifications", notificationsApiRoute);

//middleare implementation
app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user)
    }

    res.status(200).render("home", payload);
})

//socket.io connection for the chat appliction of the project
io.on("connection", socket => {

    socket.on("setup", userData => {
        socket.join(userData._id);
        socket.emit("connected");
    })
    //to handle different events and sending messages through the server
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

})
