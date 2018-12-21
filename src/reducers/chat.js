import { chatActions } from '../actions/actionTypes';

export const chat = (state = {}, action) => {
  switch (action.type) {
    case chatActions.ADD_MESSAGE:
      return {
        history: [...state.history, action.message]
      };
    default:
      return state;
  }
};
