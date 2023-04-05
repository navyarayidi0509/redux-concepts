import {BUY_GROCERIES ,BUY_VEGGIES,RESTOCK_GROCERIES ,RESTOCK_VEGGIES} from './action';
import { createStore, combineReducers } from 'redux';

// Initial states for reducers
const initialGroceryState = {
  numOfGroceries: 10,
};

const initialVeggieState = {
  numOfVeggies: 20,
};

// Reducers
const groceryReducer = (state = initialGroceryState, action) => {
  switch (action.type) {
    case BUY_GROCERIES:
      return {
        ...state,
        numOfGroceries: state.numOfGroceries - action.payload,
      };
      case RESTOCK_GROCERIES:
      return {
        ...state,
        numOfGroceries: state.numOfGroceries + action.payload,
      };
    default:
      return state;
  }
};

const veggieReducer = (state = initialVeggieState, action) => {
  switch (action.type) {
    case BUY_VEGGIES:
      return {
        ...state,
        numOfVeggies: state.numOfVeggies - action.payload,
      };
      case RESTOCK_VEGGIES:
      return {
        ...state,
        numOfVeggies: state.numOfVeggies + action.payload,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  groceries: groceryReducer,
  veggies: veggieReducer,
});

export default rootReducer;
