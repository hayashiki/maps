import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';

import {
  GROUPS_REQUEST_UPDATE,
  GROUPS_REQUEST_RESET,
  GROUPS_REQUEST_UPDATE_SUCCESS,
  GROUPS_REQUEST_FAILURE,
} from '../../actions/groups';
import {
  GROUPS_UPDATING,
  GROUPS_UPDATED,
} from '../../actions/status';
import { getUpdatedGroups } from '../../reducers/groups';
import Api from '../../utilities/Api';

function* updateGroups(id) {
  const groupsToUpdate = yield select(getUpdatedGroups, id);
  const groupIds = yield call(_.map, groupsToUpdate, 'id');
  yield put({ type: GROUPS_UPDATING, group_ids: groupIds });
  yield put({ type: GROUPS_REQUEST_RESET });
  for (let index = 0; index < groupsToUpdate.length; index += 1) {
    try {
      const groupToUpdate = groupsToUpdate[index];
      const group = yield call(_.pick, groupToUpdate, ['x', 'y', 'group_id']);
      const response = yield call(
        Api.putAuthenticated,
        `/groups/${groupToUpdate.id}`,
        group,
      );
      yield put({ type: GROUPS_REQUEST_UPDATE_SUCCESS, payload: response.data, index });
    } catch (error) {
      if (error.response && error.response.data) {
        yield put({ type: GROUPS_REQUEST_FAILURE, payload: error.response.data.error, index });
      } else {
        yield put({ type: GROUPS_REQUEST_FAILURE, payload: 'Something went wrong. Please try again', index });
      }
    }
  }
  yield put({ type: GROUPS_UPDATED, group_ids: groupIds });
}

export default function* watchForUpdateGroups() {
  while (true) {
    const action = yield take(GROUPS_REQUEST_UPDATE);
    yield call(updateGroups, action.payload);
  }
}
