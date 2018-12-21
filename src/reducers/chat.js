import { chatActions } from '../actions/actionTypes';

export const chat = (state = {}, action) => {
  switch (action.type) {
    case chatActions.ADD_MESSAGE:
      return {
        history: [...state.history, action.message]
      };
    case chatActions.RECEIVE_CHAT_MESSAGES:
      return {
        history: [...state.history, ...action.messages]
      };
    default:
      return state;
  }
};
