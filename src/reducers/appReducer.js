import { ADD_ITEM } from '../actions/appActions';

let initialState = {
  items: []
};

export default function appReducer(state = initialState, action = null) {
  switch (action.type) {
    case ADD_ITEM:
      var items = state.items;
      items.push(action.item);

      state = Object.assign({}, state, {
        items: items
      });
      return state;
    default:
      return state;
  }
}
