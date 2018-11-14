module.exports = () => {
  const clients = new Map();

  // const addClient = client => {
  //   clients.set(client.id, { client });
  // };

  const registerClient = (client, user) => {
    console.log('register user');
    clients.set(client.id, { client, user });
  };

  const removeClient = client => {
    console.log('user disconnected');
    console.log('client id', client.id);
    console.log('clients:', Array.from(clients.keys()));
    //clients.delete(client.id);
    console.log('remove client');
  };

  const onlineUsers = () => {
    return Array.from(clients.values()).map(c => {
      return {
        id: c.client.id,
        username: c.user.username
      };
    });
  };

  return {
    // addClient,
    registerClient,
    removeClient,
    onlineUsers
  };
};
