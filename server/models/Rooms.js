let exampleDataRooms = [
  {
    id: 1,
    name: 'Pizzaria Rei Jorge',
    lastMessage: 'Olá',
    location: null,
    adminUsersId: [1]
  },
  {
    id: 2,
    name: 'Shopping Ipiranga',
    lastMessage: 'Ok!',
    location: null,
    adminUsersId: [1]
  }
];

class Rooms {
  //TODO: persist data on database
  addRoom(room) {
    exampleDataRooms.push(room);
  }
  //TODO: persist data on database
  getRoomsByLocation(location) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(exampleDataRooms);
      }, 500);
    });
  }
  getRoomById(roomId) {
    return exampleDataRooms.filter(room =>
      room.id === roomId ? room : null
    )[0];
  }
  //TODO: implement delete room
  deleteRoom() {}
}

module.exports = Rooms;
