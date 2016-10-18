import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState) {

  const logger = createLogger({
    stateTransformer: (state) => {
      let newState = {};

      for (var i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      };

      return newState;
    }
  });

  const sagaMiddleware = createSagaMiddleware();
    
  const middlewares = [ thunk, sagaMiddleware, logger ];
  
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

