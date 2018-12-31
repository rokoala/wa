import { appActions, chatActions, roomActions } from './actionTypes';
import { uid } from 'react-uid';
import * as api from './api';
import { app } from '../reducers/app';

export const appLogin = username => ({
  type: appActions.CHAT_LOGIN,
  username
});

const addMessageSuccessConfirmation = message => ({
  type: chatActions.ADD_MESSAGE_CONFIRMATION,
  message
});

export const sendMessage = message =>
  api
    .addChatMessage(message)
    .then(response => addMessageSuccessConfirmation(response));

export const addMessage = message => ({
  type: chatActions.ADD_MESSAGE,
  message
});

export const setSocketClient = socketClient => ({
  type: appActions.SET_SOCKET_CLIENT,
  socketClient
});

export const toogleRoomInfo = () => ({
  type: appActions.TOOGLE_ROOM_INFO
});

export const setLocation = location => ({
  type: appActions.SET_LOCATION,
  location
});

const setRoomSuccess = room => ({
  type: appActions.SET_ROOM,
  room
});

export const setRoom = room =>
  api.setRoom(room).then(response => setRoomSuccess(response));

const getMessagesSuccess = messages => ({
  type: chatActions.INTIALIZE_MESSAGES,
  messages
});

export const getMessagesByRoom = roomId =>
  api.getMessagesByRoom(roomId).then(response => getMessagesSuccess(response));

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

const receiveRooms = rooms => ({
  type: roomActions.LOAD_ROOMS_BY_LOCATION,
  rooms
});

export const getRoomsByLocation = location =>
  api.fetchRoomsByLocation(location).then(response => receiveRooms(response));
