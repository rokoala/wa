import { roomActions } from '../actions/actionTypes';

export const rooms = (state = [], action) => {
  switch (action.type) {
    case roomActions.ADD_ROOM:
      return [...state, action.room];
    case roomActions.LOAD_ROOMS_BY_LOCATION:
      return action.rooms;

    case roomActions.ADD_MESSAGE_CONFIRMATION:
      let rooms = state;
      return rooms.map(room => {
        if (room.id === action.message.roomId)
          room.lastMessages = [...room.lastMessages, action.message];

        return room;
      });
    default:
      return state;
  }
};
