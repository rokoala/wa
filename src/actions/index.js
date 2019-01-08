import { appActions, chatActions, roomActions } from './actionTypes';
import { uid } from 'react-uid';
import * as api from './api';

const appLoginSuccess = user => ({
  type: appActions.LOGIN,
  user
});

export const appLogin = (username, password) =>
  api.login(username, password).then(response => appLoginSuccess(response));

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

const addRoomSuccess = room => ({
  type: roomActions.ADD_ROOM,
  room
});

export const addRoom = _room => {
  const room = {
    id: uid(_room), //TODO: Get the id from database
    name: _room.name,
    location: _room.location
  };

  return api.addRoom(room).then(response => addRoomSuccess(response));
};

export const receivedRooms = rooms => ({
  type: roomActions.LOAD_ROOMS_BY_LOCATION,
  rooms
});

export const getRoomsByLocation = location =>
  api.fetchRoomsByLocation(location).then(response => receivedRooms(response));
