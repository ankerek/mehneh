import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

import { productsActions } from '../../products';

import LinkContainer from './LinkContainer';
import Header from './Header';
import { CashDesk } from '../../cashdesk';
import { Products } from '../../products';

const contentStyles = {
  'paddingLeft': 250,
}

@connect(
  state => ({
    products: state.products,
  })
)
export default class App extends Component {

  componentDidMount() {
    this.props.dispatch(productsActions.fetchProductsRequest());
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Drawer width={250}>
            <MenuItem containerElement={<LinkContainer activeOnlyWhenExact to="/" />} primaryText="Cashdesk" leftIcon={<ShoppingBasketIcon />} />
            <MenuItem containerElement={<LinkContainer to="/products" />} primaryText="Products" leftIcon={<StorageIcon />} />
            <MenuItem primaryText="Settings" leftIcon={<SettingsIcon />} />
            <Divider />
            <MenuItem><LinkContainer to="/products">Menu Item 3</LinkContainer></MenuItem>
          </Drawer>
            
          <div style={contentStyles}>
            <Header />
            
            <Match exactly pattern="/" component={CashDesk} />
            <Match pattern="/products" component={Products} />
          </div>
        </div>
      </BrowserRouter>
   );
  }
}

