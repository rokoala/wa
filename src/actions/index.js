import { appActions, roomActions } from './actionTypes';
import { uid } from 'react-uid';
import SocketClientApi from './api';
import { Store } from '../store';

const api = new SocketClientApi('http://localhost:8000');

const appLoginSuccess = user => {
  api.registerMessageListener();
  return {
    type: appActions.LOGIN,
    user
  };
};

export const appLogin = (...args) =>
  api
    .socketIOEmit('login', ...args)
    .then(response => appLoginSuccess(response));

const addMessageSuccessConfirmation = message => ({
  type: appActions.ADD_MESSAGE,
  message
});

export const sendMessage = message =>
  api
    .socketIOEmit('addMessage', message)
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

export const setRoom = room => {
  return dispatch => {
    dispatch({ type: appActions.SET_ROOM, room });
    dispatch(subscribeRoom(room.id));
  };
};

export const getAndSetRoom = room => {
  return dispatch => {
    return api.socketIOEmit('getRoomById', room.id).then(response => {
      dispatch({ type: appActions.SET_ROOM, response });
      dispatch(subscribeRoom(response));
    });
  };
};

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
    api.socketIOEmit('addRoom', room).then(response => {
      dispatch(addRoomSuccess(response));
      dispatch(setRoom(response));
      dispatch(setRoomFormVisibility(false));
    });
};

export const receivedRooms = rooms => ({
  type: roomActions.LOAD_ROOMS_BY_LOCATION,
  rooms
});

export const getRoomsByLocation = location =>
  api
    .socketIOEmit('getRoomsByLocation', location)
    .then(response => receivedRooms(response));

export const showRoomList = () => ({
  type: appActions.SHOW_ROOM_LIST
});

const receivedSubscribedRooms = subscribedRooms => ({
  type: appActions.LOAD_SUBSCRIBE_ROOMS,
  subscribedRooms
});

export const getSubscribedRooms = () =>
  api
    .socketIOEmit('getSubscribedRooms')
    .then(response => receivedSubscribedRooms(response));

const successSubscribeRoom = subscribedRooms => ({
  type: appActions.SUBSCRIBE_ROOM,
  subscribedRooms
});

export const subscribeRoom = roomId => {
  const { subscribedRooms } = Store.getState().app;

  const alreadySubscribed = subscribedRooms.filter(room => room.id === roomId);

  return alreadySubscribed.length === 0
    ? api
        .socketIOEmit('subscribeRoom', roomId)
        .then(response => successSubscribeRoom(response))
    : { type: 'DEFAULT' };
};
