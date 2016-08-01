export default (state = -1, action) => {
  switch (action.type) {
    case 'EDIT_ITEM':
      return action.idx;
    default:
      return state;
  }
};
