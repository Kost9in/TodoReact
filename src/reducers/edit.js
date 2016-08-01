import { EDIT_ITEM } from '../constants/actions';

const getDefaultState = () => {
  return {
    idx: -1,
    editItem: '',
    focusOnEdit: false
  };
}

export default (state = getDefaultState(), action) => {
  switch (action.type) {
    case EDIT_ITEM:
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
};
