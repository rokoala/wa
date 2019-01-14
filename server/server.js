const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const ClientManager = require('./ClientManager');
const Authenticator = require('./Authenticator');
const SocketHandler = require('./SocketHandler');
const app = express();

// server port
const port = 8000;

// server instance
const server = http.createServer(app);

// creates a socket using the server instance
const io = socketIO(server);

// create static directory to server images
// todo: get images from other way
app.use(express.static(__dirname + '/../public/'));

Authenticator(io, {
  authenticate: (client, { username, password }, callback) => {
    const user = ClientManager.login(username, password);
    if (user) callback(null, user);
    else callback('Error: user or password wrong');
  },
  onSuccess: (socket, data) => {
    SocketHandler(io, socket, data);
  }
});

// starts a unix socket and listen for connections based on the port
server.listen(port, err => {
  if (err) throw err;
  console.log('\x1b[33m%s\x1b[0m', `server listening to port ${port}`);
});
