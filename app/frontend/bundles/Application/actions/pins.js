// Get
export const PINS_REQUEST_FETCH = 'PINS_REQUEST_FETCH'; // API GET
export const PINS_REQUEST_FETCH_SUCCESS = 'PINS_REQUEST_FETCH_SUCCESS'; // API success, mutate redux

// New/Create
export const PINS_REQUEST_CREATE = 'PINS_REQUEST_CREATE'; // API PUT
export const PINS_REQUEST_CREATE_SUCCESS = 'PINS_REQUEST_CREATE_SUCCESS'; // API success, mutate redux
export const ADD_NEW_PIN = 'ADD_NEW_PIN'; // Add new record to redux
export const UPDATE_NEW_PIN = 'UPDATE_NEW_PIN'; // Update new record
export const REMOVE_NEW_PIN = 'REMOVE_NEW_PIN'; // Remove new record

// Update
export const PINS_REQUEST_UPDATE = 'PINS_REQUEST_UPDATE'; // API PATCH
export const PINS_REQUEST_UPDATE_SUCCESS = 'PINS_REQUEST_UPDATE_SUCCESS'; // API success, mutate redux
export const UPDATE_PIN = 'UPDATE_PIN'; // Update existing record

// Delete
export const PINS_REQUEST_DELETE = 'PINS_REQUEST_DELETE'; // API DELETE
export const PINS_REQUEST_DELETE_SUCCESS = 'PINS_REQUEST_DELETE_SUCCESS'; // API success, mutate redux
export const DELETE_PIN = 'DELETE_PIN'; // delete existing record (adds to delete list)

// Request stuff
export const PINS_REQUEST_FAILURE = 'PINS_REQUEST_FAILURE'; // Set error states
export const PINS_REQUEST_RESET = 'PINS_REQUEST_RESET'; // reset errors

export const PINS_RESET = 'PINS_RESET'; // reset to initial state
export const PINS_CLEAR_CHANGES = 'PINS_CLEAR_CHANGES'; // clear pending changes
