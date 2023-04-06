import { createStore } from 'redux';

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const updateData = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: data
  };
};

const store = createStore(reducer);

export default store;
