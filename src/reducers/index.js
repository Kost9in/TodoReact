import { combineReducers } from 'redux';
import items from './items';
import selected from './selected';
import edit from './edit';
import add from './add';
import filter from './filter';
import save from './save';

const todoApp = combineReducers({
  items,
  selected,
  edit,
  add,
  filter,
  save
});

export default todoApp;
