import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store'; 

import Root from './Root';

require('./theme/main.css');

const rootEl = document.getElementById('root');
const store = configureStore();

// Needed for onTouchTap
injectTapEventPlugin();

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