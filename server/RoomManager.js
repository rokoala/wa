let rooms = [
  {
    id: '1-room',
    name: 'Pizzaria do Rei Jorge',
    lastMessage: 'Olá',
    subscribers: [],
    lastMessages: [],
    location: ''
  },
  {
    id: '2-room',
    name: 'Shopping Ipiranga',
    lastMessage: 'Ok!',
    subscribers: [],
    lastMessages: [],
    location: ''
  }
];

const RoomManager = {
  currentRoom: null,
  addRoom: room => {
    rooms.push(room);
  },
  subscribeUser(userId, roomId) {
    rooms.filter(room => {
      if (room.id === roomId) room.subscribers.push(userId);
    });
  },
  getLastMessages(roomId, userId) {
    let lastMessages = [];
    rooms.filter(room => {
      if (room.id === roomId) {
        if (room.subscribers.indexOf(userId)) lastMessages = room.lastMessages;
      }
    });

    return lastMessages;
  },
  getRoomsByLocation: location => {
    return rooms;
  }
};

module.exports = RoomManager;
