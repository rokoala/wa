let history = [];
let id = 0;

const ChatManager = {
  addMessage: message => {
    const _message = message;
    _message.id = id++;
    history.push(message);
    return message;
  },
  getMessages: roomId => {
    return history.filter(message => message.roomId === roomId);
  }
};

module.exports = ChatManager;
