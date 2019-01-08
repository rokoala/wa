const Users = {
  joao: {
    id: '1-room',
    name: 'Joao'
  },
  maria: {
    id: '2-room',
    name: 'Maria'
  }
};

const ClientManager = {
  createUser: user => {
    //implements
  },
  login(username, password) {
    return Users[username];
  }
};

module.exports = ClientManager;
