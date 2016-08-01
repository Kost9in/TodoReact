import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, deleteItemsAndUnselect as deleteItems } from '../actions'

class TodoActions extends Component {
  constructor(...args) {
    super(...args);
    this.onEditItem = this.onEditItem.bind(this);
    this.onDeleteItems = this.onDeleteItems.bind(this);
  }
  render() {
     let className = 'todo-actions';
     className += (this.props.selected.length) ? ' show' : '';
     className += (this.props.selected.length > 1) ? ' many' : '';
    return (
      <div className={className}>
        <ul>
          <li><a className="edit" onClick={this.onEditItem}><i className="fa fa-pencil"></i></a></li>
          <li><a className="remove" onClick={this.onDeleteItems}><i className="fa fa-times"></i></a></li>
        </ul>
      </div>
    );
  }
  onEditItem() {
    this.props.dispatch(editItem({ idx: this.props.selected[0] }));
  }
  onDeleteItems() {
    this.props.dispatch(deleteItems());
  }
}

export default connect(state => state)(TodoActions);
