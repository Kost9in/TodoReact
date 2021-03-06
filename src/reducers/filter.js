import { CHANGE_FILTER } from '../constants/actions';

export default (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};
