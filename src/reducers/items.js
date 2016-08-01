const saveToStorage = (items) => {
  localStorage.items = JSON.stringify(items);
  return items;
}

export default (state = [], action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return [...action.items];
    case 'ADD_ITEM':
      return saveToStorage([...state, action.item]);
    case 'SAVE_ITEM':
      state[action.idx] = action.item;
      return saveToStorage([...state]);
    case 'DELETE_ITEMS':
      return saveToStorage(state.filter((item, idx) => action.items.indexOf(idx) === -1));
    default:
      return state;
  }
};
