import { appActions } from './actionTypes';

export const appLogin = username => ({
  type: appActions.CHAT_LOGIN,
  username
});
