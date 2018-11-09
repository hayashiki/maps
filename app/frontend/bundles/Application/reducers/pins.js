import {
  // get
  PINS_REQUEST_FETCH_SUCCESS,
  // New/Create
  PINS_REQUEST_CREATE_SUCCESS,
  ADD_NEW_PIN,
  UPDATE_NEW_PIN,
  REMOVE_NEW_PIN,

  // Update
  PINS_REQUEST_UPDATE_SUCCESS,
  UPDATE_PIN,

  // Delete
  PINS_REQUEST_DELETE_SUCCESS,
  DELETE_PIN,

  // Request stuff
  PINS_REQUEST_FAILURE,
  PINS_REQUEST_RESET,
  PINS_RESET,
  PINS_CLEAR_CHANGES,
} from '../actions/pins';

import {
  removeSingleItemByIndex,
  removeSingleItemById,
  removeSingleItemByKey,
  removeSingleItemByValue,
  updateOrAddSingleItemById,
  updateSingleItemById,
  updateSingleItemByKey,
} from './helper';

export function getNewPins(state) {
  return state.pins.new_pins;
}

export function getDeletedPins(state) {
  return state.pins.deleted_pins;
}

export function getPinById(state, id) {
  return state.pins.pins.find(r => r.id === id);
}

export function getUpdatedPins(state) {
  return state.pins.updated_pins;
}

export const initialState = {
  deleted_pins: [],
  new_pins: [],
  pins: [],
  updated_pins: [],
  error: false,
  errorMessage: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PINS_RESET:
      return initialState;
    case PINS_REQUEST_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case PINS_REQUEST_RESET:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case PINS_CLEAR_CHANGES: {
      return {
        ...state,
        new_pins: [],
        deleted_pins: [],
        updated_pins: [],
      };
    }
    case PINS_REQUEST_FETCH_SUCCESS:
      return {
        ...state,
        pins: [
          ...state.pins,
          ...action.payload,
        ],
      };
    case PINS_REQUEST_CREATE_SUCCESS:
      return {
        ...state,
        new_pins: removeSingleItemByIndex(state.new_pins, action.index),
        pins: [
          ...state.pins,
          action.payload,
        ],
      };
    case PINS_REQUEST_DELETE_SUCCESS:
      return {
        ...state,
        pins: removeSingleItemById(state.pins, { id: action.payload }),
        deleted_pins: removeSingleItemByValue(state.deleted_pins, action.payload),
      };
    case PINS_REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        pins: updateSingleItemById(state.pins, action.payload),
        updated_pins: removeSingleItemById(state.updated_pins, action.payload),
      };
    case ADD_NEW_PIN:
      return {
        ...state,
        new_pins: [
          ...state.new_pins,
          action.payload,
        ],
      };
    case UPDATE_NEW_PIN:
      return {
        ...state,
        new_pins: updateSingleItemByKey(state.new_pins, action.payload, 'index'),
      };
    case REMOVE_NEW_PIN:
      return {
        ...state,
        new_pins: removeSingleItemByKey(state.new_pins, action.payload, 'index'),
      };
    case DELETE_PIN:
      return {
        ...state,
        updated_pins: removeSingleItemById(state.updated_pins, { id: action.payload }),
        deleted_pins: [
          ...state.deleted_pins,
          action.payload,
        ],
      };
    case UPDATE_PIN: {
      return {
        ...state,
        updated_pins: updateOrAddSingleItemById(state.updated_pins, action.payload),
      };
    }
    default:
      return state;
  }
}
