import { Server } from "socket.io";
import { Message } from "./def";

const io = new Server(4000 || process.argv[2], {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    socket.on("messageCreate", (message: Message) => {
        io.emit("messageCreate", {
            ...message,
            timestamp: Date.now(),
        });
    })
});
