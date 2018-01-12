export default function sendMessage(send, socket) {
  socket.emit("new-message", send);
}
