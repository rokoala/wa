const RoomManager = {
  currentRoom: null,
  getRoomsByLocation: location => {
    return [
      {
        id: 1,
        name: 'Pizzaria do Rei Jorge',
        lastMessage: 'Olá'
      },
      {
        id: 2,
        name: 'Shopping Ipiranga',
        lastMessage: 'Ok!'
      }
    ];
  }
};

module.exports = RoomManager;
