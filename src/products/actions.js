export const productsActions = {

  FETCH_PRODUCTS_REQUEST: 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAIL: 'FETCH_PRODUCTS_FAIL',

  fetchProductsRequest: () => ({
    type: productsActions.FETCH_PRODUCTS_REQUEST,
  }),

  fetchProductsSuccess: () => {

    return {
      type: productsActions.FETCH_PRODUCTS_SUCCESS,
    }
  }

}