/**
 * Create the store with dynamic reducers
 */

import ***REMOVED*** createStore, applyMiddleware, compose ***REMOVED*** from 'redux';
import ***REMOVED*** fromJS ***REMOVED*** from 'immutable';
import ***REMOVED*** routerMiddleware ***REMOVED*** from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = ***REMOVED******REMOVED***, history) ***REMOVED***
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(***REMOVED***
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
        name: `Strapi - Dashboard`,
***REMOVED***)
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = ***REMOVED******REMOVED***; // Reducer registry
  store.injectedSagas = ***REMOVED******REMOVED***; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) ***REMOVED***
    module.hot.accept('./reducers', () => ***REMOVED***
      store.replaceReducer(createReducer(store.injectedReducers));
***REMOVED***);
***REMOVED***

  return store;
***REMOVED***
