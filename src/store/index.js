import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import feed from '../reducers';
import rootSaga from '../sagas';

const __PRODUCTION__ = process.env.NODE_ENV === 'production';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  feed,
  compose(
    __PRODUCTION__ ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, createLogger()),
    !__PRODUCTION__ && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
