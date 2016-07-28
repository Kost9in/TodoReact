import React, { Component } from 'react';

export default class TodoAddForm extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newItem: ''
    };
  }
  render() {
    return (
      <form className="add-todo" onSubmit={(e) => this.addItem(e)}>
        <input type="text" required name="newItem" value={this.state.newItem} onChange={(e) => this.onChangeInput(e)} placeholder="Add todo..."/>
        <button type="submit"><i className="fa fa-plus"></i></button>
      </form>
    );
  }
  onChangeInput(e) {
    this.setState({ [e.currentTarget.getAttribute('name')]: e.currentTarget.value.trim() });
  }
  addItem(e) {
    e.preventDefault();
    const value = this.state.newItem.trim();
    if (value) this.props.addItem(value);
    this.state.newItem = '';
  }
}
