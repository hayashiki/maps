import 'babel-polyfill';
import ReactOnRails from 'react-on-rails';
// eslint-disable-next-line
import '../styles';

import Application from '../bundles/Application/startup/Application';

// This is how react_on_rails can see the Applications in the browser.
ReactOnRails.register({
  Application,
});
