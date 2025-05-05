import { Server } from "socket.io";

let ioInstance = null;

const connectedUsers = new Map();

export const initSocketIo = (server) => {
  ioInstance = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["*"],
      credentials: true,
    },
  });

  ioInstance.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    // Store user ID when they join
    socket.on("join", (userId) => {
      connectedUsers.set(userId, socket.id);
    });

    socket.on("disconnect", () => {
      connectedUsers.forEach((socketId, userId) => {
        if (socketId === socket.id) {
          connectedUsers.delete(userId);
        }
      });
      console.log(`User Disconnected: ${socket.id}`);
    });
  });

  return ioInstance;
};

export const getSocketIo = () => {
  if (!ioInstance) {
    throw new Error("Socket.io has not been initialized!");
  }
  return ioInstance;
};
