const RoomManager = require('./RoomManager');

const Users = [
  {
    id: '1',
    username: 'joao',
    subscribedRooms: []
  },
  {
    id: '2',
    username: 'maria',
    subscribedRooms: []
  }
];

const getUserByUsername = username => {
  return Users.filter(user => user.username === username)[0];
};

const getUserById = userId => {
  return Users.filter(user => user.id === userId)[0];
};

const getSubscribedRooms = subscribedRoomsId => {
  return subscribedRoomsId.map(subscribedRoom =>
    RoomManager.getRoomById(subscribedRoom)
  );
};

const ClientManager = {
  createUser: user => {
    //implements
  },
  login(username, password) {
    return getUserByUsername(username);
  },
  subscribeRoom(userId, roomId) {
    const user = getUserById(userId);
    user.subscribedRooms.push(roomId);
    return getSubscribedRooms(user.subscribedRooms);
  },
  getSubscribedRooms(userId) {
    const user = getUserById(userId);
    return getSubscribedRooms(user.subscribedRooms);
  }
};

module.exports = ClientManager;
