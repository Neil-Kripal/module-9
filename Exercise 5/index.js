const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const users = {};

io.on("connection", (socket) => {
  socket.broadcast.emit("user connected");

  socket.on("chat message", (data) => {
    const nickname = users[socket.id];
    io.emit("chat message", { nickname, message: data });
  });

  socket.on("set nickname", (nickname) => {
    users[socket.id] = nickname;
    io.emit("update online users", Object.values(users));
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("user disconnected");
    io.emit("update online users", Object.values(users));
  });

  socket.on("typing", function (isTyping) {
    socket.broadcast.emit("typing", isTyping);
  });
  
});


server.listen(3000, () => {
  console.log("listening on *:3000");
});
