import { takeLatest } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { api } from '../api';
import { productsSchema } from './schema';
import { productsActions } from './actions';

function* fetchProducts() {
  try {
    const products = yield call(api.fetch, '/api/products', { method: 'GET' });
    console.log(products);
    console.log(normalize(products, productsSchema));
  } catch(error) {
    yield put({ type: productsActions.FETCH_PRODUCTS_FAIL, error });
  }
}

function* watchFetchProducts() {
  yield* takeLatest(productsActions.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export const productsSagas = [
  fork(watchFetchProducts)
];