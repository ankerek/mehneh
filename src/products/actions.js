export const productsActions = {

  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',

  fetchProductsSuccess: () => {

    return {
      type: productsActions.FETCH_PRODUCTS_SUCCESS,
    }
  }

}