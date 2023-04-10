import { createStore } from 'redux';

const initialState = {
  name: '',
  address: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name
  };
};

export const setAddress = (address) => {
  return {
    type: 'SET_ADDRESS',
    payload: address
  };
};

const store = createStore(reducer);

export default store;