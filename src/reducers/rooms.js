import { roomActions } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Pizzaria Rei Jorge',
    lastMessage: 'Olá'
  },
  {
    id: 2,
    name: 'Shopping Ipiranga',
    lastMessage: 'Ok!'
  }
];

export const rooms = (state = initialState, action) => {
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
