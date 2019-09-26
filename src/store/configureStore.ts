import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { ApplicationState } from 'store';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const navMiddleware = createReactNavigationReduxMiddleware(
    (state: ApplicationState) => state.nav
  )

  const store = createStore(rootReducer, compose(applyMiddleware(logger, navMiddleware, sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
