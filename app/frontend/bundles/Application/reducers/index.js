import { combineReducers } from 'redux';
import status from './status';
import pins from './pins';
import groups from './groups';

export default combineReducers({
  status,
  pins,
  groups,
});
