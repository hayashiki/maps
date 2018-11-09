import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';

import {
  PINS_REQUEST_CREATE,
  PINS_REQUEST_CREATE_SUCCESS,
  PINS_REQUEST_FAILURE,
} from '../../actions/pins';
import {
  PINS_UPDATING,
  PINS_UPDATED,
} from '../../actions/status';
import { getNewPins } from '../../reducers/pins';
import Api from '../../utilities/Api';

function* createPins() {
  const pinsToCreate = yield select(getNewPins);
  yield put({ type: PINS_UPDATING });
  for (let index = 0; index < pinsToCreate.length; index += 1) {
    try {
      const pinToCreate = pinsToCreate[index];
      const pin = yield call(_.pick, pinToCreate, ['x', 'y', 'group_id']);
      const response = yield call(
        Api.postAuthenticated,
        '/pins',
        pin,
      );
      yield put({
        type: PINS_REQUEST_CREATE_SUCCESS,
        payload: response.data,
      });
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

export default function* watchForCreatePins() {
  while (true) {
    yield take(PINS_REQUEST_CREATE);
    yield call(createPins);
  }
}
