import { Store } from '../../store';

const messages = [
  {
    id: 1,
    from: 'Joao',
    roomId: 12,
    datetime: 'test',
    text: 'hello'
  },
  {
    id: 2,
    from: 'Carla',
    roomId: 12,
    datetime: 'test',
    text: 'hi'
  },
  {
    id: 3,
    from: 'Joao',
    roomId: 12,
    datetime: 'test',
    text: 'how are u?'
  }
];

// TODO: Limit get the first 100 messages
export const fetchChatMessages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages);
    }, 500);
  });
};

//TODO: Use location as paramater
export const fetchRoomsByLocation = location => {
  const { socketClient } = Store.getState().app;
  return new Promise((resolve, reject) => {
    socketClient.emit('getRooms', location, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const addChatMessage = message => {
  const { socketClient } = Store.getState().app;
  return new Promise((resolve, reject) => {
    socketClient.emit('addMessage', message, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const setRoom = room => {
  const { socketClient } = Store.getState().app;
  return new Promise((resolve, reject) => {
    socketClient.emit('joinRoom', room, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
