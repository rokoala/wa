import { roomActions } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Pizzaria Rei Jorge',
    history: [
      {
        message: 'Olá',
        author: 'Roberto',
        timestamp: null
      }
    ],
    lastMessage: 'Olá'
  },
  {
    id: 2,
    name: 'Shopping Ipiranga',
    history: [
      {
        message: 'Ok!',
        author: 'Carla',
        timestamp: null
      }
    ],
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
