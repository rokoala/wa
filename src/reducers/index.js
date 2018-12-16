import { combineReducers } from 'redux';
import { app } from './app';
import { chat } from './chat';
import { rooms } from './rooms';

export const Reducers = combineReducers({
  app,
  chat,
  rooms
});
