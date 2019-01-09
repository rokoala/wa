import { app } from './app';
import { rooms } from './rooms';

export const rootReducer = (state = {}, action) => {
  const _rooms = state.rooms;
  const _chat = state.chat;
  return {
    rooms: rooms(state.rooms, action),
    app: app(state.app, { ...action, _rooms, _chat })
  };
};
