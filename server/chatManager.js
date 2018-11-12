module.exports = name => {
  let history = [];

  const addMessage = message => {
    history.push(message);
  };

  return {
    addMessage
  };
};
