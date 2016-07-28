import React, { Component } from 'react';

export default class TodoActions extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }
  render() {
    return (
      <div className="todo-actions show">
        <ul>
          <li><a className="edit" onClick={() => this.props.editItem()}><i className="fa fa-pencil"></i></a></li>
          <li><a className="remove" onClick={() => this.props.deleteItems()}><i className="fa fa-times"></i></a></li>
        </ul>
      </div>
    );
  }
}
