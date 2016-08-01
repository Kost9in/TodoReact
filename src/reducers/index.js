import { combineReducers } from 'redux';
import items from './items';
import selected from './selected';
import edit from './edit';
import add from './add';
import filter from './filter';

const todoApp = combineReducers({
  items,
  selected,
  edit,
  add,
  filter
});

export default todoApp;
