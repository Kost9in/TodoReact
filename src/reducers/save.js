import { ADD_ITEM, SAVE_ITEM, DELETE_ITEMS } from '../constants/actions';

const saveToStorage = (items) => {
  localStorage.items = JSON.stringify(items);
  return items;
}

export default (state = [], action, qwe) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(action);
      return state;
    case SAVE_ITEM:
      console.log(action);
      return state;
    case DELETE_ITEMS:
      console.log(action);
      return state;
    default:
      return state;
  }
};
