import 'react-hot-loader/patch';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';
import { ConnectedRouter } from 'connected-react-router';
import App from '../containers/App';
import store, { history } from '../store/index';

const Applications = (props) => {
  if (module.hot) {
    module.hot.accept('../containers/App', () => {
      ReactOnRails.reactOnRailsPageLoaded();
    });
  }
  return (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App initialProps={props} />
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  );
};

export default Applications;
