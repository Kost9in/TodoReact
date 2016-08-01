import * as types from '../constants/actions';

const saveToStorage = (items) => {
  localStorage.items = JSON.stringify(items);
}

/* normal actions */

export const changeAddItem = (item) => {
  return {
    type: types.CHANGE_ADD_ITEM,
    item
  };
};


export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    item
  };
};

export const selectItems = (config) => {
  return {
    type: types.SELECT_ITEMS,
    config
  };
};

export const editItem = (state) => {
  return {
    type: types.EDIT_ITEM,
    state
  };
};

export const saveItem = (idx, item) => {
  return {
    type: types.SAVE_ITEM,
    idx,
    item
  };
};

export const deleteItems = (items) => {
  return {
    type: types.DELETE_ITEMS,
    items
  };
};

export const filterItems = (filter) => {
  return {
    type: types.CHANGE_FILTER,
    filter
  };
};

/* middleware actions */

export const addItemAndClear = () => (dispatch, getState) => {
  dispatch(addItem(getState().add));
  dispatch(changeAddItem(''));
  saveToStorage(getState().items);
};

export const deleteItemsAndUnselect = () => (dispatch, getState) => {
  dispatch(deleteItems(getState().selected));
  dispatch(selectItems());
  saveToStorage(getState().items);
};

export const filterItemsAndUnselect = (filter) => (dispatch) => {
  dispatch(filterItems(filter));
  dispatch(selectItems());
};

export const saveItemAndClear = () => (dispatch, getState) => {
  dispatch(saveItem(getState().edit.idx, getState().edit.editItem));
  dispatch(editItem({ idx: -1, editItem: '', focusOnEdit: false }));
  saveToStorage(getState().items);
};
