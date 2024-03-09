const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

const socketList = [];

wsServer.on("connection", (socket) => {
  //   console.log("New frontend connected");
  socketList.push(socket);
  setTimeout(() => {
    socket.send("Welcome to web-socket server");
  }, 3000);
  socketList.forEach((item) => {
    if (item !== socket) {
      item.send("New member is connected");
    }
  });
});
