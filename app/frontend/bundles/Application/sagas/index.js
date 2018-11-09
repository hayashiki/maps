import { all, fork } from 'redux-saga/effects';

import {
  watchForPinsFetch,
  watchForCreatePins,
  watchForUpdatePins,
  watchForDeletePins,
} from './pins';

import {
  watchForGroupsFetch,
  watchForCreateGroups,
  watchForUpdateGroups,
  watchForDeleteGroups,
} from './groups';

import listenForFetchAllData from './initialFetch';

export default function* root() {
  yield all([
    // pins
    fork(watchForPinsFetch),
    fork(watchForCreatePins),
    fork(watchForUpdatePins),
    fork(watchForDeletePins),

    // groups
    fork(watchForGroupsFetch),
    fork(watchForCreateGroups),
    fork(watchForUpdateGroups),
    fork(watchForDeleteGroups),

    fork(listenForFetchAllData),
  ]);
}
