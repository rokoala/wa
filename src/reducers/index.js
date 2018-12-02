import { combineReducers } from 'redux';
import { app } from './app';
import { chat } from './chat';

export const Reducers = combineReducers({
  app,
  chat
});
