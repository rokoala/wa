const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const ClientManager = require('./ClientManager');
// const ChatManager = require('./ChatManager.js');
const RoomManager = require('./RoomManager');
const app = express();

// server port
const port = 8000;

// server instance
const server = http.createServer(app);

// creates a socket using the server instance
const io = socketIO(server);

io.on('connection', socket => {
  socket.on('login', (username, password, cb) => {
    const user = ClientManager.login(username, password);
    cb(null, user);
  });

  socket.on('joinRoom', (userId, room, cb) => {
    RoomManager.subscribeUser(userId, room.id);
    socket.join(room.id, () => {
      cb(null, room);
    });
  });

  socket.on('leaveRoom', (roomId, cb) => {
    socket.leave(roomId, () => {
      cb(null, 'left the room');
    });
  });

  socket.on('addRoom', (room, cb) => {
    cb(null, 'added room');
  });

  socket.on('getRooms', (location, cb) => {
    cb(null, RoomManager.getRoomsByLocation(location));
  });

  socket.on('addMessage', message => {
    io.to(message.roomId).emit('message', message);
  });

  socket.on('getMessagesByRoom', (userId, roomId, cb) => {
    const _messages = RoomManager.getLastMessages(userId, roomId);
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
