const messages = [
  {
    id: 1,
    from: 'Joao',
    roomId: 12,
    datetime: 'test',
    text: 'hello'
  },
  {
    id: 2,
    from: 'Carla',
    roomId: 12,
    datetime: 'test',
    text: 'hi'
  },
  {
    id: 3,
    from: 'Joao',
    roomId: 12,
    datetime: 'test',
    text: 'how are u?'
  }
];

// TODO: Limit get the first 100 messages
export const fetchChatMessages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages);
    }, 500);
  });
};
