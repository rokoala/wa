const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

// server port
const port = 8000;

// server instance
const server = http.createServer(app);

// creates a socket using the server instance
const io = socketIO(server);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('change color', color => {
    console.log('Color Changed to', color);
    io.sockets.emit('change color', color);
  });
  socket.on('disconnecte', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`server listening to port 8000`);
});
