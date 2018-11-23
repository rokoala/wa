import { appActions } from '../actions/actionTypes';

const initialState = {
  username: '',
  chatEnabled: false
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case appActions.CHAT_LOGIN:
      return {
        ...state,
        username: action.username,
        chatEnabled: true
      };
    default:
      return state;
  }
};
