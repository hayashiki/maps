import _ from 'lodash';
import { call, put, take } from 'redux-saga/effects';

import {
  PINS_REQUEST_FETCH,
  PINS_REQUEST_RESET,
  PINS_REQUEST_SUCCESS,
  PINS_REQUEST_FAILURE,
} from '../../actions/pins';
import {
  BEGIN_FETCH,
  COMPLETE_FETCH,
} from '../../actions/status';
import Api from '../../utilities/Api';

function getPinsApi(page) {
  const params = {
    page,
  };
  return Api.getAuthenticated('/pins', params);
}

function* fetchPins() {
  yield put({ type: BEGIN_FETCH });
  try {
    yield put({ type: PINS_REQUEST_RESET });
    const response = yield call(getPinsApi, 1);
    const total = yield _.toNumber(response.headers.total);
    const perPage = yield _.toNumber(response.headers['per-page']);
    const pages = yield Math.ceil(total / perPage);
    yield put({ type: PINS_REQUEST_SUCCESS, payload: response.data });

    for (let page = 2; page <= pages; page += 1) {
      const r = yield call(getPinsApi, page);
      yield put({ type: PINS_REQUEST_SUCCESS, payload: r.data });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put({ type: PINS_REQUEST_FAILURE, payload: error.response.data.error });
    } else {
      yield put({ type: PINS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again' });
    }
  }
  yield put({ type: COMPLETE_FETCH });
}

export default function* watchForPinsFetch() {
  while (true) {
    yield take(PINS_REQUEST_FETCH);
    yield call(fetchPins);
  }
}
