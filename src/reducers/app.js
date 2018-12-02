import { appActions } from '../actions/actionTypes';

const initialState = {
  username: '',
  chatEnabled: false,
  roomInfo: false
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
    default:
      return state;
  }
};
