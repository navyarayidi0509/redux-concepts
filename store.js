import { createStore } from 'redux';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export const incrementCounter = () => {
  return {
    type: 'INCREMENT_COUNTER'
  };
};

const store = createStore(reducer);

export default store;
