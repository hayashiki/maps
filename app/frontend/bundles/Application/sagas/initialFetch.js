import { fork, put, take, all } from 'redux-saga/effects';

import { GROUPS_REQUEST_FETCH } from '../actions/groups';
import { PINS_REQUEST_FETCH } from '../actions/pins';
import {
  FETCH_ALL_DATA,
  STARTED_INITIAL_LOADING,
} from '../actions/status';

function* fetchData() {
  yield all([
    put({ type: GROUPS_REQUEST_FETCH }),
    put({ type: PINS_REQUEST_FETCH }),
  ]);
}

export default function* listenForFetchAllData() {
  while (true) {
    yield take(FETCH_ALL_DATA);
    yield fork(fetchData);
    yield put({ type: STARTED_INITIAL_LOADING });
  }
}
