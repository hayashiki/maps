/* eslint-disable import/no-extraneous-dependencies */
import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('raven-js');
/* eslint-enable import/no-extraneous-dependencies */


//
// CONSOLE
//

/* eslint-disable no-console */
console.error = (error) => {
  throw error;
};
console.warn = () => {};
/* eslint-enable no-console */
