import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { call } from 'redux-saga/effects';

import history from './history';
import middleware, { sagaMiddleware } from './middleware';
import reducer from './reducer';

import rootSaga from '../sagas';

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

sagaMiddleware.run(rootSaga);

function* wrappedSagaRunner(saga, ...args) {
  try {
    return yield call(saga, ...args);
  } catch (e) {
    return e;
  }
}

export function executeSaga(saga, ...args) {
  return sagaMiddleware.run(wrappedSagaRunner, saga, ...args).toPromise();
}

export { history };
export default store;
