// Get
export const GROUPS_REQUEST_FETCH = 'GROUPS_REQUEST_FETCH'; // API GET
export const GROUPS_REQUEST_FETCH_SUCCESS = 'GROUPS_REQUEST_FETCH_SUCCESS'; // API success, mutate redux

// New/Create
export const GROUPS_REQUEST_CREATE = 'GROUPS_REQUEST_CREATE'; // API PUT
export const GROUPS_REQUEST_CREATE_SUCCESS = 'GROUPS_REQUEST_CREATE_SUCCESS'; // API success, mutate redux
export const ADD_NEW_GROUP = 'ADD_NEW_GROUP'; // Add new record to redux
export const UPDATE_NEW_GROUP = 'UPDATE_NEW_GROUP'; // Update new record
export const REMOVE_NEW_GROUP = 'REMOVE_NEW_GROUP'; // Remove new record

// Update
export const GROUPS_REQUEST_UPDATE = 'GROUPS_REQUEST_UPDATE'; // API PATCH
export const GROUPS_REQUEST_UPDATE_SUCCESS = 'GROUPS_REQUEST_UPDATE_SUCCESS'; // API success, mutate redux
export const UPDATE_GROUP = 'UPDATE_GROUP'; // Update existing record

// Delete
export const GROUPS_REQUEST_DELETE = 'GROUPS_REQUEST_DELETE'; // API DELETE
export const GROUPS_REQUEST_DELETE_SUCCESS = 'GROUPS_REQUEST_DELETE_SUCCESS'; // API success, mutate redux
export const DELETE_GROUP = 'DELETE_GROUP'; // delete existing record (adds to delete list)

// Request stuff
export const GROUPS_REQUEST_FAILURE = 'GROUPS_REQUEST_FAILURE'; // Set error states
export const GROUPS_REQUEST_RESET = 'GROUPS_REQUEST_RESET'; // reset errors

export const GROUPS_RESET = 'GROUPS_RESET'; // reset to initial state
export const GROUPS_CLEAR_CHANGES = 'GROUPS_CLEAR_CHANGES'; // clear pending changes
