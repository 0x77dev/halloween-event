import { createServer } from "http";
import { Server } from "socket.io";

// @ts-expect-error: no types for this module
import createArtNet from 'artnet'

const server = createServer();
const artnet = createArtNet({
  host: '192.168.50.255',
  refresh: 100,
});

const io = new Server(server, {
  transports: ['websocket']
});

io.on("connection", (socket) => {
  socket.on('artnet', (...data) => {
    artnet.set(...data, () => {
      console.log(...data)
    })
  })

  console.log(socket.id, 'connected');
});

io.on('artnet', (...data) => {
  console.log(data)
})

server.listen(1447);
console.log('listening on port 1447');
