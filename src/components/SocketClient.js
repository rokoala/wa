import SocketIOClient from 'socket.io-client';
import uid from 'uid';
import { addMessage } from '../actions';
import { Store } from '../store';

export class SocketClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.socket = SocketIOClient(this.endpoint);
  }
  addUser(username) {
    this.socket.emit('socket:addUser', username);
  }
  addMessage({ author, text }) {
    const message = { author, text, id: uid() };
    this.socket.emit('addmessage', message);

    message.fromMe = true;
    Store.dispatch(addMessage(message));

    return message;
  }
  registerMessageHandler(onMessageReceived) {
    this.socket.on('message', onMessageReceived);
  }
  unregisterMessageHandler() {
    this.socket.off('message');
  }
  onlineUsers() {
    return new Promise((resolve, reject) => {
      this.socket.emit('socket:onlineUsers', (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}

export default SocketClient;
