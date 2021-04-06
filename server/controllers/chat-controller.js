
//TODO
const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer);

const User = require('../models/User');
const Message = require('../models/Message');

io.use(async (socket, next) => {
    const username = await User.findById(username);
    socket.username = username;
    next();
});

io.on("connect", (socket) => {
    const users = [];
    for (let [id, socket] of io.of("/chat").sockets) {
        users.push({
            userID: id,
            username: socket.username,
        });
    }

    socket.on('connect', () => {
        this.users.forEach((user) => {
            if (user.self) {
                user.connected = true;
            }
        });
    });

    socket.join(socket.userID)

    socket.broadcast.emit("user connected", {
        userId: socket.id,
        username: socket.username,
    });
    
    socket.on("private message", ({message, to}) => {
        socket.to(to).emit("private message"), {
            message,
            from: socket.userID,
            to,
        }
    });

    socket.on('disconnect', async () => {
        const matchingSockets = await io.in(socket.userID).allSockets()
    });

});