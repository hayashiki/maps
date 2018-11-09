import {
  // groups
  GROUPS_UPDATING,
  GROUPS_UPDATED,
  // pins
  PINS_UPDATING,
  PINS_UPDATED,
  // fetching
  BEGIN_FETCH,
  COMPLETE_FETCH,
  STARTED_INITIAL_LOADING,
} from '../actions/status';

export function outstandingPinRequests(state) {
  return state.status.pins;
}

export function outstandingGroupRequests(state) {
  return state.status.groups;
}

export function isLoadingData(state) {
  return (!state.status.startedLoadingInitialData || state.status.fetching > 0);
}

export const initialState = {
  groups: 0,
  pins: 0,
  fetching: 0,
  startedLoadingInitialData: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STARTED_INITIAL_LOADING:
      return {
        ...state,
        startedLoadingInitialData: true,
      };
    case GROUPS_UPDATING:
      return {
        ...state,
        groups: state.groups + 1,
      };
    case GROUPS_UPDATED:
      return {
        ...state,
        groups: state.groups - 1,
      };
    case PINS_UPDATING:
      return {
        ...state,
        pins: state.pins + 1,
      };
    case PINS_UPDATED:
      return {
        ...state,
        pins: state.pins - 1,
      };
    case BEGIN_FETCH:
      return {
        ...state,
        fetching: state.fetching + 1,
      };
    case COMPLETE_FETCH:
      return {
        ...state,
        fetching: state.fetching - 1,
      };
    default:
      return state;
  }
}
