import { appActions, chatActions } from './actionTypes';

export const appLogin = username => ({
  type: appActions.CHAT_LOGIN,
  username
});

export const addMessage = message => ({
  type: chatActions.ADD_MESSAGE,
  message
});

export const addSocketClient = socketClient => ({
  type: appActions.ADD_SOCKET_CLIENT,
  socketClient
});

export const toogleRoomInfo = () => ({
  type: appActions.TOOGLE_ROOM_INFO
});

export const setLocation = location => ({
  type: appActions.SET_LOCATION,
  location
});

export const setRoom = room => ({
  type: appActions.SET_ROOM,
  room
});

export const toogleRoomForm = () => ({
  type: appActions.TOOGLE_ROOM_FORM
});
