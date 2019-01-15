import { appActions } from '../actions/actionTypes';

const addLastMessageCurrentRoom = (room, message) => {
  const _room = Object.assign({}, room);
  if (_room.id.toString() === message.roomId)
    _room.lastMessages = [..._room.lastMessages, message];
  return _room;
};

const addMessageSubscribedRoom = (subscribedRooms, message) => {
  const _room = [...subscribedRooms];
  _room.forEach(room => {
    if (room.id === message.roomId) {
      room.lastMessages = [...room.lastMessages, message];
    }
  });
  return _room;
};

export const app = (state = {}, action) => {
  switch (action.type) {
    case appActions.LOGIN:
      return {
        ...state,
        user: action.user,
        chatEnabled: true
      };
    case appActions.TOOGLE_ROOM_INFO:
      return {
        ...state,
        roomInfo: !state.roomInfo
      };
    case appActions.SET_SOCKET_CLIENT:
      return {
        ...state,
        socketClient: action.socketClient
      };
    case appActions.SET_LOCATION:
      return {
        ...state,
        location: action.location
      };
    case appActions.SET_ROOM:
      return {
        ...state,
        room: action.room
      };
    case appActions.SET_ROOM_FORM_VISIBILITY:
      return {
        ...state,
        showRoomForm: action.showRoomForm
      };
    case appActions.ADD_MESSAGE:
      const _room = state.room
        ? addLastMessageCurrentRoom(state.room, action.message)
        : null;

      const subscribedRooms = addMessageSubscribedRoom(
        state.subscribedRooms,
        action.message
      );

      return {
        ...state,
        room: _room,
        subscribedRooms: subscribedRooms
      };
    case appActions.SHOW_ROOM_LIST:
      return {
        ...state,
        room: null
      };
    case appActions.LOAD_SUBSCRIBE_ROOMS:
      return {
        ...state,
        subscribedRooms: action.subscribedRooms
      };
    case appActions.SUBSCRIBE_ROOM:
      return {
        ...state,
        subscribedRooms: action.subscribedRooms
      };
    default:
      return state;
  }
};
