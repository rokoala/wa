const Users = {
  joao: {
    id: 1,
    name: 'Joao'
  },
  maria: {
    id: 2,
    name: 'Maria'
  }
};

const ClientManager = {
  createUser: user => {
    //implements
  },
  login(username, password) {
    return Users[username] || {};
  }
};

module.exports = ClientManager;
