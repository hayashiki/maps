import { connectRouter } from 'connected-react-router';

import rootReducer from '../reducers';

import history from './history';

export default connectRouter(history)(rootReducer);
