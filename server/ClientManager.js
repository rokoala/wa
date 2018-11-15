module.exports = () => {
  const clients = new Map();

  const registerClient = (client, user) => {
    clients.set(client.id, { client, user });
  };

  const removeClient = client => {
    clients.delete(client.id);
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
    registerClient,
    removeClient,
    onlineUsers
  };
};
