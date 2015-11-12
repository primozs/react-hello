export const ADD_ITEM = 'ADD_ITEM';

/**
 * Action creator
 * dobra diskusija na temo akcij
 * https://github.com/rackt/redux/issues/291
 *
 * @param text
 * @returns {{}}
 */
export function addItem(text) {

  // returns action object
  return {
    type: ADD_ITEM,
    item: text
  }
}
