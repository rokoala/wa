import { chatActions } from '../actions/actionTypes';

const initalState = {
  history: []
};

export const chat = (state = initalState, action) => {
  switch (action.type) {
    case chatActions.ADD_MESSAGE:
      return {
        history: [...state.history, action.message]
      };
    default:
      return state;
  }
};
