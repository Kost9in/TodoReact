
export const setItems = (items) => {
  return {
    type: 'SET_ITEMS',
    items
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
};

export const selectItems = (config) => {
  return {
    type: 'SELECT_ITEMS',
    config
  };
};

export const editItem = (idx) => {
  return {
    type: 'EDIT_ITEM',
    idx
  };
};

export const saveItem = (idx, item) => {
  return {
    type: 'SAVE_ITEM',
    idx,
    item
  };
};

export const deleteItems = (items) => {
  return {
    type: 'DELETE_ITEMS',
    items
  };
};

