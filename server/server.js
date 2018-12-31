const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const chatManager = require('./chatManager.js');
const ClientManager = require('./ClientManager');
const RoomManager = require('./RoomManager');
const app = express();

// server port
const port = 8000;

// server instance
const server = http.createServer(app);

// creates a socket using the server instance
const io = socketIO(server);

// creates a new room
const room = chatManager('mainroom');

const clientManager = ClientManager();

io.on('connection', socket => {
  socket.on('joinRoom', (room, cb) => {
    const _roomId = room.id.toString();
    socket.join(_roomId, () => {
      cb(null, room);
    });
  });

  socket.on('leaveRoom', (roomId, cb) => {
    console.log('leaving room ' + roomId);
    socket.leave(roomId, () => {
      cb(null, 'left the room');
    });
  });

  socket.on('addRoom', room => {});

  socket.on('getRooms', (location, cb) => {
    cb(null, RoomManager.getRoomsByLocation(location));
  });

  socket.on('addMessage', message => {
    const _message = room.addMessage(message);
    io.to(message.roomId).emit('message', _message);
  });

  socket.on('getMessagesByRoom', (roomId, cb) => {
    const _messages = room.getMessages(roomId);
    cb(null, _messages);
  });

  socket.on('socket:onlineUsers', callback => {
    callback(null, clientManager.onlineUsers());
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('error', function(err) {
    console.log('received error from client:', socket.id);
  });
});

// starts a unix socket and listen for connections based on the port
server.listen(port, err => {
  if (err) throw err;
  console.log(`server listening to port 8000`);
});
