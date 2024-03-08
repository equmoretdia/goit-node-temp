const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

wsServer.on("connection", () => {
  console.log("New frontend connected");
});
