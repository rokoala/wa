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

export const getMessagesByRoom = roomId =>
  socketClientEmit('getMessagesByRoom', roomId);

export const setRoom = newRoom => {
  const { socketClient, room } = Store.getState().app;

  const joinRoom = (room, resolve, reject) => {
    socketClient.emit('joinRoom', room, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  };

  return new Promise((resolve, reject) => {
    if (room)
      socketClient.emit('leaveRoom', room.id, err => {
        if (err) reject(err);

        joinRoom(newRoom, resolve, reject);
      });
    else joinRoom(newRoom, resolve, reject);
  });
};
