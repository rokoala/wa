import { Store } from '../../store';
import SocketClient from 'socket.io-client';
import { appActions } from '../actionTypes';

class SocketApi {
  constructor(server) {
    console.log(server);
    this.socketClient = new SocketClient(server);
  }
  registerMessageListener() {
    this.socketClient.on('waMessage', message => {
      Store.dispatch({
        type: appActions.ADD_MESSAGE,
        message
      });
    });
  }
  unregisterMessageListener() {
    //todo: on logout add this listener
    this.socketClient.off('waMessage');
  }
  socketIOEmit(name, ...args) {
    return new Promise((resolve, reject) => {
      this.socketClient.emit(name, ...args, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}

export default SocketApi;
