import { appActions, roomActions } from '../actions/actionTypes';

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
    case roomActions.ADD_MESSAGE_CONFIRMATION:
      if (state.room.id.toString() === action.message.roomId) {
        state.room.lastMessages = [...state.room.lastMessages, action.message];
      }

      return {
        ...state
      };
    case appActions.SHOW_ROOM_LIST:
      return {
        ...state,
        room: null
      };
    default:
      return state;
  }
};
