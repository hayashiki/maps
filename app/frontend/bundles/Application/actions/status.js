// Groups
export const GROUPS_UPDATING = 'GROUPS_UPDATING';
export const GROUPS_UPDATED = 'GROUPS_UPDATED';

// Pins
export const PINS_UPDATING = 'PINS_UPDATING';
export const PINS_UPDATED = 'PINS_UPDATED';

// Fetching
export const BEGIN_FETCH = 'BEGIN_FETCH';
export const COMPLETE_FETCH = 'COMPLETE_FETCH';

export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
export const STARTED_INITIAL_LOADING = 'STARTED_INITIAL_LOADING';


export function fetchAllData() {
  return {
    type: FETCH_ALL_DATA,
  };
}
