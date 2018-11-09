import {
  // get
  GROUPS_REQUEST_FETCH_SUCCESS,
  // New/Create
  GROUPS_REQUEST_CREATE_SUCCESS,
  ADD_NEW_GROUP,
  UPDATE_NEW_GROUP,
  REMOVE_NEW_GROUP,

  // Update
  GROUPS_REQUEST_UPDATE_SUCCESS,
  UPDATE_GROUP,

  // Delete
  GROUPS_REQUEST_DELETE_SUCCESS,
  DELETE_GROUP,

  // Request stuff
  GROUPS_REQUEST_FAILURE,
  GROUPS_REQUEST_RESET,
  GROUPS_RESET,
  GROUPS_CLEAR_CHANGES,
} from '../actions/groups';

import {
  removeSingleItemByIndex,
  removeSingleItemById,
  removeSingleItemByKey,
  removeSingleItemByValue,
  updateOrAddSingleItemById,
  updateSingleItemById,
  updateSingleItemByKey,
} from './helper';

export function getNewGroups(state) {
  return state.groups.new_groups;
}

export function getDeletedGroups(state) {
  return state.groups.deleted_groups;
}

export function getGroupById(state, id) {
  return state.groups.groups.find(r => r.id === id);
}

export function getUpdatedGroups(state) {
  return state.groups.updated_groups;
}

export const initialState = {
  deleted_groups: [],
  new_groups: [],
  groups: [],
  updated_groups: [],
  error: false,
  errorMessage: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GROUPS_RESET:
      return initialState;
    case GROUPS_REQUEST_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case GROUPS_REQUEST_RESET:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case GROUPS_CLEAR_CHANGES: {
      return {
        ...state,
        new_groups: [],
        deleted_groups: [],
        updated_groups: [],
      };
    }
    case GROUPS_REQUEST_FETCH_SUCCESS:
      return {
        ...state,
        groups: [
          ...state.groups,
          ...action.payload,
        ],
      };
    case GROUPS_REQUEST_CREATE_SUCCESS:
      return {
        ...state,
        new_groups: removeSingleItemByIndex(state.new_groups, action.index),
        groups: [
          ...state.groups,
          action.payload,
        ],
      };
    case GROUPS_REQUEST_DELETE_SUCCESS:
      return {
        ...state,
        groups: removeSingleItemById(state.groups, { id: action.payload }),
        deleted_groups: removeSingleItemByValue(state.deleted_groups, action.payload),
      };
    case GROUPS_REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        groups: updateSingleItemById(state.groups, action.payload),
        updated_groups: removeSingleItemById(state.updated_groups, action.payload),
      };
    case ADD_NEW_GROUP:
      return {
        ...state,
        new_groups: [
          ...state.new_groups,
          action.payload,
        ],
      };
    case UPDATE_NEW_GROUP:
      return {
        ...state,
        new_groups: updateSingleItemByKey(state.new_groups, action.payload, 'index'),
      };
    case REMOVE_NEW_GROUP:
      return {
        ...state,
        new_groups: removeSingleItemByKey(state.new_groups, action.payload, 'index'),
      };
    case DELETE_GROUP:
      return {
        ...state,
        updated_groups: removeSingleItemById(state.updated_groups, { id: action.payload }),
        deleted_groups: [
          ...state.deleted_groups,
          action.payload,
        ],
      };
    case UPDATE_GROUP: {
      return {
        ...state,
        updated_groups: updateOrAddSingleItemById(state.updated_groups, action.payload),
      };
    }
    default:
      return state;
  }
}
