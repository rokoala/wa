import SocketIOClient from 'socket.io-client';
import uid from 'uid';

export class SocketClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.socket = SocketIOClient(this.endpoint);
  }
  addMessage(text) {
    this.socket.emit('add message', { author: 'Rodrigo', text, id: uid() });
  }
  onMessageReceived(cb) {
    this.socket.on('add message', cb);
  }
}

export default SocketClient;
