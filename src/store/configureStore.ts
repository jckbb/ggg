import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
