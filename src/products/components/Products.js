import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsActions } from '../../products';

import ProductItem from './ProductItem';

@connect(
  state => ({
    products: state.products,
  })
)
export default class Products extends Component {

  componentDidMount() {
    this.props.dispatch(productsActions.fetchProductsRequest());
  }

  render() {

    return (
      <div>
        <h1>Products</h1>
        <ProductItem/>
      </div>
   );
  }
}
