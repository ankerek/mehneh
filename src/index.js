import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import React from 'react';

import Root from './Root';

const rootEl = document.getElementById('root');
const store = {};

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    //const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
         <Root store={store} />
      </AppContainer>,
      rootEl
    );
  });
}