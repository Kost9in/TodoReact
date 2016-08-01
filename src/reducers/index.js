import { combineReducers } from 'redux';
import items from './items';
import selected from './selected';
import edit from './edit';

const todoApp = combineReducers({
  items,
  selected,
  edit
});

export default todoApp;
