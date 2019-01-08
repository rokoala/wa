let rooms = [
  {
    id: '1-room',
    name: 'Pizzaria do Rei Jorge',
    subscribers: [],
    lastMessages: [],
    location: ''
  },
  {
    id: '2-room',
    name: 'Shopping Ipiranga',
    subscribers: [],
    lastMessages: [],
    location: ''
  }
];

const defaultRoom = {
  id: '',
  name: '',
  subscribers: [],
  lastMessages: [],
  location: ''
};

const RoomManager = {
  addRoom: room => {
    const _room = { ...defaultRoom, ...room };
    rooms.push(_room);
  },
  subscribeUser(userId, roomId) {
    rooms.filter(room => {
      if (room.id === roomId) {
        if (room.subscribers.indexOf(userId.toString()) < 0)
          room.subscribers.push(userId);
        else console.warn('user already subscribed');
      }
    });
  },
  addMessage({ text, roomId }, userId) {
    rooms.filter(room => {
      if (room.id.toString() === roomId) {
        room.lastMessages.push({ text, userId });
      }
    });
  },
  getLastMessages(roomId, userId) {
    let lastMessages = [];
    rooms.filter(room => {
      if (room.id === roomId) {
        if (room.subscribers.indexOf(userId.toString()) >= 0)
          lastMessages = room.lastMessages;
      }
    });

    return lastMessages;
  },
  getRoomsByLocation: location => {
    return rooms;
  }
};

module.exports = RoomManager;
