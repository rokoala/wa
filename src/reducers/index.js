import { app } from './app';
import { chat } from './chat';
import { rooms } from './rooms';

export const rootReducer = (state = {}, action) => {
  const _rooms = state.rooms;
  const _chat = state.chat;
  const _selectedRoom = state.app ? state.app.room : null;

  return {
    chat: chat(state.chat, { ...action, _selectedRoom }),
    rooms: rooms(state.rooms, action),
    app: app(state.app, { ...action, _rooms, _chat })
  };
};
