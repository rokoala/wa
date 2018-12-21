import { roomActions } from '../actions/actionTypes';

export const rooms = (state = [], action) => {
  switch (action.type) {
    case roomActions.ADD_ROOM:
      return [...state, action.room];

    case roomActions.LOAD_ROOMS_BY_LOCATION:
      //getRoomsByLocation(action.location)
      const rooms = [];
      return [...state, rooms];

    default:
      return state;
  }
};
