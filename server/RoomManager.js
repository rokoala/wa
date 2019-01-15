var rooms = [];

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
    let success = false;
    rooms.forEach(room => {
      if (room.id === roomId) {
        if (room.subscribers.indexOf(userId.toString()) < 0) {
          room.subscribers.push(userId);
          success = true;
        }
      }
    });
    if (!success) console.warn('User already subscribed');

    return success;
  },
  unsubscribeUser(userId, roomId) {
    rooms.forEach(room => {
      if (room.id === roomId) {
        room.subscribers = room.subscribers.filter(subscriber =>
          subscriber !== userId ? true : false
        );
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
  },
  getRoomById: id => {
    return rooms.filter(room => room.id === id)[0];
  }
};

module.exports = RoomManager;
