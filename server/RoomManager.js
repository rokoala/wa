let rooms = [];

const RoomManager = {
  addRoom: room => {
    const defaultRoom = {
      id: '',
      name: '',
      subscribers: [],
      lastMessages: [],
      location: ''
    };

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
    const message = { text, userId, roomId, username, date: new Date() };
    rooms.filter(room => {
      if (room.id.toString() === roomId) {
        room.lastMessages.push(message);
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
