module.exports = name => {
  const history = [];
  let id = 0;

  const addMessage = message => {
    const _message = message;
    _message.id = id++;
    history.push(message);
    return message;
  };

  const getMessages = roomId => {
    return history.filter(message => message.roomId === roomId);
  };

  return {
    addMessage,
    getMessages
  };
};
