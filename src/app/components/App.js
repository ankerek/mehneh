import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket';

import { productsActions } from '../../products';

import Header from './Header';
import { Products } from '../../products';

const contentStyles = {
  'padding-left': 250,
}

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
        <div style={contentStyles}>
          <Header />
        </div>
        <Drawer width={250}>
          <MenuItem primaryText="Cashdesk" leftIcon={<ShoppingBasketIcon />} />
          <MenuItem primaryText="Settings" leftIcon={<SettingsIcon />} />
          <Divider />
          <MenuItem>Menu Item 3</MenuItem>
        </Drawer>
        <BrowserRouter>
          <Match pattern="/" component={Products} />
        </BrowserRouter>
      </div>
   );
  }
}

