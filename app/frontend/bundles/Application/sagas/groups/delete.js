import { call, put, select, take } from 'redux-saga/effects';

import {
  GROUPS_REQUEST_DELETE,
  GROUPS_REQUEST_RESET,
  GROUPS_REQUEST_DELETE_SUCCESS,
  GROUPS_REQUEST_FAILURE,
} from '../../actions/groups';
import {
  GROUPS_UPDATING,
  GROUPS_UPDATED,
} from '../../actions/status';
import { getDeletedGroups } from '../../reducers/groups';
import Api from '../../utilities/Api';

export function* deleteGroups() {
  const groupsToDelete = yield select(getDeletedGroups);
  yield put({ type: GROUPS_UPDATING });
  yield put({ type: GROUPS_REQUEST_RESET });
  for (let index = 0; index < groupsToDelete.length; index += 1) {
    try {
      const groupToDelete = groupsToDelete[index];
      yield call(
        Api.deleteAuthenticated,
        `/groups/${groupToDelete}`,
      );
      yield put({ type: GROUPS_REQUEST_DELETE_SUCCESS, payload: groupToDelete });
    } catch (error) {
      if (error.response && error.response.data) {
        yield put({ type: GROUPS_REQUEST_FAILURE, payload: error.response.data.error, index });
      } else {
        yield put({ type: GROUPS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again', index });
      }
    }
  }
  yield put({ type: GROUPS_UPDATED });
}

export default function* watchForDeleteGroups() {
  while (true) {
    yield take(GROUPS_REQUEST_DELETE);
    yield call(deleteGroups);
  }
}
