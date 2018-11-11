import _ from 'lodash';
import { call, put, take } from 'redux-saga/effects';

import {
  GROUPS_REQUEST_FETCH,
  GROUPS_REQUEST_RESET,
  GROUPS_REQUEST_FETCH_SUCCESS,
  GROUPS_REQUEST_FAILURE,
} from '../../actions/groups';
import {
  BEGIN_FETCH,
  COMPLETE_FETCH,
} from '../../actions/status';
import Api from '../../utilities/Api';

function getGroupsApi(page) {
  const params = {
    page,
  };
  return Api.getAuthenticated('/groups', params);
}

function* fetchGroups() {
  yield put({ type: BEGIN_FETCH });
  try {
    yield put({ type: GROUPS_REQUEST_RESET });
    const response = yield call(getGroupsApi, 1);
    const total = yield _.toNumber(response.headers.total);
    const perPage = yield _.toNumber(response.headers['per-page']);
    const pages = yield Math.ceil(total / perPage);
    yield put({ type: GROUPS_REQUEST_FETCH_SUCCESS, payload: response.data });

    for (let page = 2; page <= pages; page += 1) {
      const r = yield call(getGroupsApi, page);
      yield put({ type: GROUPS_REQUEST_FETCH_SUCCESS, payload: r.data });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      yield put({ type: GROUPS_REQUEST_FAILURE, payload: error.response.data.error });
    } else {
      yield put({ type: GROUPS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again' });
    }
  }
  yield put({ type: COMPLETE_FETCH });
}

export default function* watchForGroupsFetch() {
  while (true) {
    yield take(GROUPS_REQUEST_FETCH);
    yield call(fetchGroups);
  }
}
