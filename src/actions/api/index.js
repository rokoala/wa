import { Store } from '../../store';

const socketClientEmit = (name, ...param) => {
  const { socketClient } = Store.getState().app;
  return new Promise((resolve, reject) => {
    socketClient.emit(name, ...param, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const login = (username, password) =>
  socketClientEmit('login', username, password);

//TODO: Use location as paramater
export const fetchRoomsByLocation = location =>
  socketClientEmit('getRooms', location);

export const addChatMessage = message =>
  socketClientEmit('addMessage', message);

export const addRoom = room => socketClientEmit('addRoom', room);

export const fetchSubscribedRooms = () =>
  socketClientEmit('getSubscribedRooms');

export const subscribeRoom = roomId =>
  socketClientEmit('subscribeRoom', roomId);
