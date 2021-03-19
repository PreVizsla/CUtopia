import * as express from "express";
import * as SocketIO from "socket.io";
import { createServer, Server as HTTPServer } from "http";

export class Server {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: HTTPServer;
    private io: SocketIO.Server;
    private port: string | number;
    private activeSockets: string[] = [];

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(express.static('public'));
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private fetchUserId (socket: SocketIO.Socket) {
      return socket.id;
    }

    private config (): void {
      this.port = Server.PORT || process.env.PORT;
    }

    private sockets(): void {
      this.io = SocketIO(this.server);
    }

    public getApp (): express.Application {
      return this.app;
    }

    private listen (): void {
      this.server.listen(this.port, () => {
        console.log("Running server on port %s", this.port);
      });

      // there is something wrong with this part or in sockets()
      this.io.on('connection', async (socket: SocketIO.Socket) => {
        const userId = await this.fetchUserId(socket);
        console.log("Socket connected");
        const existingSocket = this.activeSockets.find(
          existingSocket => existingSocket === userId
        );
        if (!existingSocket) {
          this.activeSockets.push(userId);
          socket.emit("update-user-list", {
            users: this.activeSockets.filter(
              existingSocket => existingSocket !== userId
            )
          });
        }

        socket.broadcast.emit("update-user-list", {
          users: [userId]
        });

        socket.on('disconnect', () => {
          this.activeSockets = this.activeSockets.filter(
            existingSocket => existingSocket !== userId
          );
          socket.broadcast.emit("remove-user", {
            socketId: userId
          });
        });
        
        socket.on("call-user", data => {
          socket.to(data.to).emit("call-made", {
            offer: data.offer,
            socket: userId
          });
        });
        
        socket.on("make-answer", data => {
          socket.to(data.to).emit("answer-made", {
            socket: userId,
            answer: data.answer
          });
        });
      });
    }
}