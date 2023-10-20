export async function IOHandler(io) {
  const users = {};

  io.on("connection", (socket) => {
    console.log(`New Client connected: ${socket.id}`);

    socket.on("send_message", (data) => {
      // io.emit("receive_message", data);
      socket.broadcast.emit("receive_message", {...data, sender : socket.data });
    });

    socket.on("sign_in", (data) => {
      users[data] = socket;
      socket.data = data;
      socket.broadcast.emit("new_user", JSON.stringify(Object.keys(users)));
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}
