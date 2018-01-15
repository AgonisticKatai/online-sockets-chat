const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").load();

const http = require("http").Server(app);
const io = require("socket.io")(http);

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

let messages = [];

io.on("connection", socket => {

  socket.on("new-message", message => {
    messages.push(message);
    io.sockets.emit("new-message", message);
  });

  socket.on("get-messages", () => {
    io.sockets.emit("messages", messages);
  });
});

http.listen(PORT);

console.log(`Listennig on port ${PORT}`);
