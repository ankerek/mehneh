import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LinkContainer extends Component {

  render() {
    return (
      <Link to={this.props.to} {...this.props} activeStyle={{ color: 'red' }}>
        {this.props.children}
      </Link>
   );
  }
}
