const Users = {
  joao: {
    id: '1',
    username: 'joao'
  },
  maria: {
    id: '2',
    username: 'maria'
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
