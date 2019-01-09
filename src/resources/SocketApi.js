import { Store } from '../store';

class SocketApi {
  constructor(socketClient) {
    this.socketClient = socketClient;
  }
  regiterMessageListener() {
    this.socketClient.on('message', this.onMessageReceived);
  }
  unregisterMessageListener() {
    this.socketClient.off('message');
  }
  onMessageReceived(message) {
    Store.dispatch({
      type: 'ADD_MESSAGE_CONFIRMATION',
      message
    });
  }
}

export default SocketApi;
