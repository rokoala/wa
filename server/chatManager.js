module.exports = name => {
  const history = [];
  let id = 0;

  const addMessage = message => {
    const _message = message;
    _message.id = id++;
    history.push(message);
    return message;
  };

  return {
    addMessage
  };
};
