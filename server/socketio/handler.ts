export async function IOHandler(io) {
  io.on("connection", (socket) => {
    console.log(`New Client connected: ${socket.id}`);

    socket.on("send_message", (data) => {
      io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}
