/**
 * Removes a single item from an array. Does not mutate the
 * original array.
 * @param {Array} array An array of items.
 * @param {number} index The index of the item that should be removed.
 * @return {Array} The new array.
 */
export function removeSingleItemByIndex(array, index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

/**
 * Removes a single item from an array. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be removed.
 * @return {Array} The new array.
 */
export function removeSingleItemById(array, item) {
  const index = array.findIndex(i => i.id === item.id);
  return removeSingleItemByIndex(array, index);
}

/**
 * Removes a single item from an array. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be removed.
 * @return {Array} The new array.
 */
export function removeSingleItemByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);
  return removeSingleItemByIndex(array, index);
}

/**
 * Removes a single item from an array. Does not mutate the
 * original array.
 * @param {Array} array An array of items.
 * @param {any} item The item that should be removed.
 * @return {Array} The new array.
 */
export function removeSingleItemByValue(array, item) {
  const index = array.findIndex(i => i === item);
  return removeSingleItemByIndex(array, index);
}

/**
 * Updates a single item in an array. Does not mutate the
 * original array.
 * @param {Object} array An array of items.
 * @param {number} index The index of the item to be updated.
 * @param {Object} item The item that should be updated.
 * @return {Array} The new array.
 */
export function updateSingleItemByIndex(array, index, item) {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
}

/**
 * Updates a single item in an array. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be updated.
 * @return {Array} The new array.
 */
export function updateSingleItemById(array, item) {
  const index = array.findIndex(i => i.id === item.id);
  return updateSingleItemByIndex(array, index, item);
}

/**
 * Updates a single item in an array. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be updated.
 * @return {Array} The new array.
 */
export function updateSingleItemByKey(array, item, key) {
  const index = array.findIndex(i => i[key] === item[key]);
  return updateSingleItemByIndex(array, index, item);
}

/**
 * Updates a single item in an array, or adds it. Does not mutate the
 * original array.
 * @param {{ id: number }[]} array An array of items.
 * @param {{ id: number }} item The item that should be updated.
 * @return {Array} The new array.
 */
export function updateOrAddSingleItemById(array, item) {
  const index = array.findIndex(i => i.id === item.id);
  if (index !== -1) {
    return updateSingleItemByIndex(array, index, item);
  }
  return [
    ...array,
    item,
  ];
}
