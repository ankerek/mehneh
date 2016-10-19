import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class Products extends Component {

  render() {

    return (
      <div>
        <h1>Products</h1>
        <ProductItem/>
      </div>
   );
  }
}
