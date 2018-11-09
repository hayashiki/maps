import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';

import {
  PINS_REQUEST_UPDATE,
  PINS_REQUEST_UPDATE_SUCCESS,
  PINS_REQUEST_FAILURE,
} from '../../actions/pins';
import {
  PINS_UPDATING,
  PINS_UPDATED,
} from '../../actions/status';
import { getUpdatedPins } from '../../reducers/pins';
import Api from '../../utilities/Api';

function* updatePins(id) {
  const pinsToUpdate = yield select(getUpdatedPins, id);
  const pinIds = yield call(_.map, pinsToUpdate, 'id');
  yield put({ type: PINS_UPDATING, pin_ids: pinIds });
  for (let index = 0; index < pinsToUpdate.length; index += 1) {
    try {
      const pinToUpdate = pinsToUpdate[index];
      const pin = yield call(_.pick, pinToUpdate, ['x', 'y', 'group_id']);
      const response = yield call(
        Api.putAuthenticated,
        `/pins/${pinToUpdate.id}`,
        pin,
      );
      yield put({ type: PINS_REQUEST_UPDATE_SUCCESS, payload: response.data, index });
    } catch (error) {
      if (error.response && error.response.data) {
        yield put({ type: PINS_REQUEST_FAILURE, payload: error.response.data.error, index });
      } else {
        yield put({ type: PINS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again', index });
      }
    }
  }
  yield put({ type: PINS_UPDATED, pin_ids: pinIds });
}

export default function* watchForUpdatePins() {
  while (true) {
    const action = yield take(PINS_REQUEST_UPDATE);
    yield call(updatePins, action.payload);
  }
}
