import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';

import {
  GROUPS_REQUEST_CREATE,
  GROUPS_REQUEST_CREATE_SUCCESS,
  GROUPS_REQUEST_FAILURE,
} from '../../actions/groups';
import {
  GROUPS_UPDATING,
  GROUPS_UPDATED,
} from '../../actions/status';
import { getNewGroups } from '../../reducers/groups';
import Api from '../../utilities/Api';

function* createGroups() {
  const groupsToCreate = yield select(getNewGroups);
  yield put({ type: GROUPS_UPDATING });
  for (let index = 0; index < groupsToCreate.length; index += 1) {
    try {
      const groupToCreate = groupsToCreate[index];
      const group = yield call(_.pick, groupToCreate, ['x', 'y', 'group_id']);
      const response = yield call(
        Api.postAuthenticated,
        '/groups',
        group,
      );
      yield put({
        type: GROUPS_REQUEST_CREATE_SUCCESS,
        payload: response.data,
      });
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

export default function* watchForCreateGroups() {
  while (true) {
    yield take(GROUPS_REQUEST_CREATE);
    yield call(createGroups);
  }
}
