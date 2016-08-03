import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAndClear as addItem, changeAddItem } from '../actions';

class TodoAddForm extends Component {
  constructor(...args) {
    super(...args);
    this.onChangeNewItem = this.onChangeNewItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  render() {
    return (
      <form className="add-todo" onSubmit={this.addItem}>
        <input type="text" name="newItem" value={this.props.add} onChange={this.onChangeNewItem} placeholder="Add todo..."/>
        <button type="submit"><i className="fa fa-plus"></i></button>
      </form>
    );
  }
  onChangeNewItem(e) {
    this.props.dispatch(changeAddItem(e.currentTarget.value));
  }
  addItem(e) {
    e.preventDefault();
    const value = this.props.add.trim();
    if (value) this.props.dispatch(addItem());
  }
}

export default connect(state => state)(TodoAddForm);
