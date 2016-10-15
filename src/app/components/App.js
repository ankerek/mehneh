import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import { productsActions } from '../../products';

import Header from './Header';
import { Products } from '../../products';

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
      <div>
        <Header />
        <BrowserRouter>
          <Match pattern="/" component={Products} />
        </BrowserRouter>
      </div>
   );
  }
}

