import { SELECT_ITEMS } from '../constants/actions';

const multipleSelect = (selected, idx) => {
  const indexOf = selected.indexOf(idx);
  if (indexOf !== -1) selected.splice(indexOf, 1);
  else selected.push(idx);
  return selected;
}

const rangeSelect = (selected, idx) => {
  if (selected.length) {
    let end = selected[0];
    selected = [];
    while (end !== idx) {
      selected.push(end);
      end = (end > idx) ? end - 1 : end + 1;
    }
    selected.push(idx);
  } else {
    selected = [idx];
  }
  return selected;
}

const oneSelect = (selected, idx) => {
  if (selected.indexOf(idx) !== -1 && selected.length === 1) selected = [];
  else selected = [idx];
  return selected;
}

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_ITEMS:
      let selected = [...state];
      if (typeof action.config === 'undefined') selected = [];
      else {
        selected = (action.config.type === 'multiple') ? multipleSelect(selected, action.config.start) : 
        (action.config.type === 'range') ? rangeSelect(selected, action.config.start) : 
        oneSelect(selected, action.config.start);
      }
      return selected;
    default:
      return state;
  }
};
