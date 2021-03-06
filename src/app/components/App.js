import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import AttachMoneyIcon from 'material-ui/svg-icons/editor/attach-money';

import LinkContainer from './LinkContainer';
import Header from './Header';
import { CashDesk } from '../../cashdesk';
import { Products } from '../../products';

const contentStyles = {
  'paddingLeft': 250,
}

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Drawer width={250}>
            <MenuItem containerElement={<LinkContainer activeOnlyWhenExact to="/" />} primaryText="Cashdesk" leftIcon={<ShoppingBasketIcon />} />
            <MenuItem containerElement={<LinkContainer to="/products" />} primaryText="Products" leftIcon={<StorageIcon />} />
            <MenuItem primaryText="Orders" leftIcon={<AttachMoneyIcon />} />
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

