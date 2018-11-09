import { routerMiddleware } from 'connected-react-router';
import * as Sentry from '@sentry/browser';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import history from './history';

// We use Sentry to track uncaught errors from redux-saga
export const sagaMiddleware = createSagaMiddleware({
  onError: (error) => {
    Sentry.init({
      dsn: 'https://c01e0509572348fca8b65b3fe0ad16f3@sentry.io/218571',
      ...window.SENTRY_CONFIG,
    });
    Sentry.configureScope(scope => scope.setUser(window.SENTRY_USER_CONFIG));
    Sentry.captureException(error);
    // eslint-disable-next-line no-console
    console.error(error);
  },
});

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  thunk,
];

export default middleware;
