import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'

class TodoAddForm extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newItem: ''
    };
    this.dispatch = args[0].dispatch;
    this.onChangeInput = this.onChangeInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  render() {
    return (
      <form className="add-todo" onSubmit={this.addItem}>
        <input type="text" name="newItem" value={this.state.newItem} onChange={this.onChangeInput} placeholder="Add todo..."/>
        <button type="submit"><i className="fa fa-plus"></i></button>
      </form>
    );
  }
  onChangeInput(e) {
    this.setState({ [e.currentTarget.getAttribute('name')]: e.currentTarget.value });
  }
  addItem(e) {
    e.preventDefault();
    const value = this.state.newItem.trim();
    if (value) this.dispatch(addItem(value));
    this.setState({ newItem: '' });
  }
}

export default connect(state => state)(TodoAddForm);
