let rooms = [
  // {
  //   id: '1-room',
  //   name: 'Pizzaria do Rei Jorge',
  //   subscribers: [],
  //   lastMessages: [],
  //   location: ''
  // },
  // {
  //   id: '2-room',
  //   name: 'Shopping Ipiranga',
  //   subscribers: [],
  //   lastMessages: [],
  //   location: ''
  // }
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
    return _room;
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
  addMessage({ text, roomId }, userId, username) {
    const message = { text, userId, roomId, username };
    rooms.filter(room => {
      console.log(`room.id => ${room.id}`);
      console.log(`roomId => ${roomId}`);
      if (room.id.toString() === roomId) {
        console.log(`adding to room...`);
        console.log(room);
        room.lastMessages.push(message);
        console.log(room);
      }
    });
    return message;
  },
  getLastMessages(roomId, userId) {
    let lastMessages = [];
    rooms.filter(room => {
      if (room.id.toString() === roomId) {
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
