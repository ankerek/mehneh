import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsActions } from '../../products';

@connect(
  state => ({
    products: state.products,
  })
)
export default class App extends Component {

  componentDidMount() {
    this.props.dispatch(productsActions.fetchProductsSuccess());
  }

  render() {

    return (
      <h1>hello</h1>
   );
  }
}

