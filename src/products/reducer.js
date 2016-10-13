import { Record, Map, List } from 'immutable';

const initialState = new Record({
  productsById: new Map(),
  productIds: new List(),
});

export const productsReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'test':
      return state;
    default:
      return state;
  }
}