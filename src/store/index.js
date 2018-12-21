import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

const persistedState = {
  app: {
    username: 'Test',
    chatEnabled: true,
    roomInfo: false,
    room: null,
    showRoomForm: false,
    socketClient: null,
    location: null
  },
  rooms: [
    {
      id: 1,
      name: 'Pizzaria Rei Jorge',
      lastMessage: 'Olá'
    },
    {
      id: 2,
      name: 'Shopping Ipiranga',
      lastMessage: 'Ok!'
    }
  ],
  chat: {
    history: []
  }
};

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
};

export const Store = configureStore();
