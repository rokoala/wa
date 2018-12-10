import { appActions } from '../actions/actionTypes';

const initialState = {
  username: '',
  chatEnabled: false,
  roomInfo: false,
  socketClient: null,
  location: null
};

export const app = (state = initialState, action) => {
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
    default:
      return state;
  }
};
