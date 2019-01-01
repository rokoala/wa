import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

const persistedState = {
  app: {
    user: {},
    chatEnabled: false,
    roomInfo: false,
    room: null,
    showRoomForm: false,
    socketClient: null,
    location: null
  },
  rooms: [],
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
