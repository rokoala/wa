import SocketIOClient from 'socket.io-client';
import uid from 'uid';

export class SocketClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.socket = SocketIOClient(this.endpoint);
  }
  addMessage(text) {
    const message = { author: 'Rodrigo', text, id: uid() };
    this.socket.emit('add message', message);
    return message;
  }
  onMessageReceived(cb) {
    this.socket.on('add message', cb);
  }
}

export default SocketClient;
