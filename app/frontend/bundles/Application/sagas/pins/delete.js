import { call, put, select, take } from 'redux-saga/effects';

import {
  PINS_REQUEST_DELETE,
  PINS_REQUEST_RESET,
  PINS_REQUEST_DELETE_SUCCESS,
  PINS_REQUEST_FAILURE,
} from '../../actions/pins';
import {
  PINS_UPDATING,
  PINS_UPDATED,
} from '../../actions/status';
import { getDeletedPins } from '../../reducers/pins';
import Api from '../../utilities/Api';

export function* deletePins() {
  const pinsToDelete = yield select(getDeletedPins);
  yield put({ type: PINS_UPDATING });
  yield put({ type: PINS_REQUEST_RESET });
  for (let index = 0; index < pinsToDelete.length; index += 1) {
    try {
      const pinToDelete = pinsToDelete[index];
      yield call(
        Api.deleteAuthenticated,
        `/pins/${pinToDelete}`,
      );
      yield put({ type: PINS_REQUEST_DELETE_SUCCESS, payload: pinToDelete });
    } catch (error) {
      if (error.response && error.response.data) {
        yield put({ type: PINS_REQUEST_FAILURE, payload: error.response.data.error, index });
      } else {
        yield put({ type: PINS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again', index });
      }
    }
  }
  yield put({ type: PINS_UPDATED });
}

export default function* watchForDeletePins() {
  while (true) {
    yield take(PINS_REQUEST_DELETE);
    yield call(deletePins);
  }
}
