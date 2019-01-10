import { appActions, roomActions } from './actionTypes';
import { uid } from 'react-uid';
import * as api from './api';
import { app } from '../reducers/app';

const appLoginSuccess = user => ({
  type: appActions.LOGIN,
  user
});

export const appLogin = (username, password) =>
  api.login(username, password).then(response => appLoginSuccess(response));

const addMessageSuccessConfirmation = message => ({
  type: roomActions.ADD_MESSAGE_CONFIRMATION,
  message
});

export const sendMessage = message =>
  api
    .addChatMessage(message)
    .then(response => addMessageSuccessConfirmation(response));

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

export const setRoomFormVisibility = visibility => ({
  type: appActions.SET_ROOM_FORM_VISIBILITY,
  showRoomForm: visibility
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

  return dispatch =>
    api.addRoom(room).then(response => {
      dispatch(setRoom(response));
      dispatch(setRoomFormVisibility(false));
      addRoomSuccess(response);
    });
};

export const receivedRooms = rooms => ({
  type: roomActions.LOAD_ROOMS_BY_LOCATION,
  rooms
});

export const getRoomsByLocation = location =>
  api.fetchRoomsByLocation(location).then(response => receivedRooms(response));
