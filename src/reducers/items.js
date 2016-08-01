import { ADD_ITEM, SAVE_ITEM, DELETE_ITEMS } from '../constants/actions';

const getDefaultState = () => {
  return (localStorage.items) ? JSON.parse(localStorage.items) : ['Test item 1', 'Test item 2', 'Test item 3'];
}

export default (state = getDefaultState(), action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case SAVE_ITEM:
      state[action.idx] = action.item;
      return [...state];
    case DELETE_ITEMS:
      return state.filter((item, idx) => action.items.indexOf(idx) === -1);
    default:
      return state;
  }
};
