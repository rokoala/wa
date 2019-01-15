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

const getRoomsById = subscribedRoomsId => {
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
    return getRoomsById(user.subscribedRooms);
  },
  unsubscribeRoom(userId, roomId) {
    getUserById(userId).subscribedRooms = user.subscribedRooms.filter(
      subscribedRoom => (subscribedRoom !== roomId ? true : false)
    );
  },
  getSubscribedRooms(userId) {
    return getRoomsById(getUserById(userId).subscribedRooms);
  }
};

module.exports = ClientManager;
