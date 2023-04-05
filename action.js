// actions.js

// Action types
export const BUY_GROCERIES = 'BUY_GROCERIES';
export const BUY_VEGGIES = 'BUY_VEGGIES';
export const RESTOCK_GROCERIES = 'RESTOCK_GROCERIES';
export const RESTOCK_VEGGIES = 'RESTOCK_VEGGIES';

// Action creators
export function buyGroceries() {
  return {
    type: BUY_GROCERIES,
    payload: 2,
  };
}

export function buyVeggies() {
  return {
    type: BUY_VEGGIES,
    payload: 1,
  };
}

export function restockGroceries() {
  return {
    type:RESTOCK_GROCERIES,
    payload: 5,
  };
}

export function restockVeggies() {
  return {
    type: RESTOCK_VEGGIES,
    payload: 5,
  };
}
