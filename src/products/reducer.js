import { combineReducers } from 'redux';
import { fromJS, Map, List } from 'immutable';
import { productsActions } from './actions';

const initialState = fromJS({
  loading: false,
  productsById: new Map(),
  productIds: new List(),
});

const productsById = (state = new Map(), action) => {

  switch(action.type) {
    case productsActions.FETCH_PRODUCTS_SUCCESS:
      console.log(action.payload);

      return state.merge(action.payload.entities.products);

    default:
      return state;
  }
}

const productIds = (state = new List(), action) => {
  switch(action.type) {
    case productsActions.FETCH_PRODUCTS_SUCCESS:

      return fromJS(action.payload.result);
    default:
      return state;
  }
}


export const productsReducer = combineReducers({
  productsById,
  productIds
})