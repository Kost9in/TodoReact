import { CHANGE_ADD_ITEM } from '../constants/actions';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_ADD_ITEM:
      return action.item;
    default:
      return state;
  }
};
