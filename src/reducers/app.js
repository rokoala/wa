import { appActions } from '../actions/actionTypes';

export const app = (state = {}, action) => {
  switch (action.type) {
    case appActions.CHAT_LOGIN:
      return {
        ...state,
        username: action.username,
        chatEnabled: true
      };
    case appActions.TOOGLE_ROOM_INFO:
      return {
        ...state,
        roomInfo: !state.roomInfo
      };
    case appActions.ADD_SOCKET_CLIENT:
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
    case appActions.TOOGLE_ROOM_FORM:
      return {
        ...state,
        showRoomForm: !state.showRoomForm
      };
    default:
      return state;
  }
};
