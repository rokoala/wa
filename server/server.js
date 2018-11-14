const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const chatManager = require('./chatManager.js');
const ClientManager = require('./ClientManager');
const app = express();

// server port
const port = 8000;

// server instance
const server = http.createServer(app);

// creates a socket using the server instance
const io = socketIO(server);

// creates a new room
const room = chatManager('testRoom');

const clientManager = ClientManager();

io.on('connection', socket => {
  console.log('Joined new');
  socket.join('mainroom');

  // socket.on('socket:addUser', username => {
  //clientManager.registerClient(socket, { username });
  //socket.broadcast.to('mainroom').emit('socket:addUser', { username });
  // });

  socket.on('addmessage', message => {
    console.log('add message', message);
    console.log('end message');
    room.addMessage(message);
    socket.broadcast.to('mainroom').emit('message', message);
  });

  // socket.on('socket:onlineUsers', callback => {
  //   callback(null, clientManager.onlineUsers());
  // });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    clientManager.removeClient(socket);
  });

  socket.on('error', function(err) {
    console.log('received error from client:', socket.id);
  });

  socket.on('reconnect_attempt', () => {
    console.log('reconnect attempt');
  });

  socket.on('reconnect', number => {
    console.log('Reconnected to server', number);
  });

  socket.on('reconnect_attempt', () => {
    console.log('Reconnect Attempt');
  });

  socket.on('reconnecting', number => {
    console.log('Reconnecting to server', number);
  });

  socket.on('reconnect_error', err => {
    console.log('Reconnect Error', err);
  });

  socket.on('reconnect_failed', () => {
    console.log('Reconnect failed');
  });

  socket.on('connect_error', () => {
    console.log('connect_error');
  });
});

// starts a unix socket and listen for connections based on the port
server.listen(port, err => {
  if (err) throw err;
  console.log(`server listening to port 8000`);
});
