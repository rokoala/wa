module.exports = name => {
  const history = [];

  const addMessage = message => {
    history.push(message);
  };

  return {
    addMessage
  };
};
