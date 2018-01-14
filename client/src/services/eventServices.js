function sendMessage(send, socket) {
  socket.emit("new-message", send);
}

function loadMessages(socket) {
  socket.emit("get-messages");
}

export { sendMessage, loadMessages };
