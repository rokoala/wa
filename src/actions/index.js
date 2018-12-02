import { appActions, chatActions } from './actionTypes';

export const appLogin = username => ({
  type: appActions.CHAT_LOGIN,
  username
});

export const addMessage = message => ({
  type: chatActions.ADD_MESSAGE,
  message
});
