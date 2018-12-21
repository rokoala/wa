import { appActions, chatActions, roomActions } from './actionTypes';
import { uid } from 'react-uid';
import * as api from './api';

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

export const addRoom = _room => {
  const room = {
    id: uid(_room), //TODO: Get the id from database
    history: [],
    lastMessage: '',
    name: _room.name,
    location: _room.location
  };

  console.log(room);
  return {
    type: roomActions.ADD_ROOM,
    room
  };
};

const receiveChatMessages = messages => ({
  type: chatActions.RECEIVE_CHAT_MESSAGES,
  messages
});

export const fetchChatMessages = () =>
  api.fetchChatMessages().then(response => receiveChatMessages(response));
