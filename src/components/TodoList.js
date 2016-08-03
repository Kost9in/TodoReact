import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItems, editItem, saveItemAndClear as saveItem, filterItemsAndUnselect as filterItems } from '../actions';

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.onItemClick = this.onItemClick.bind(this);
    this.onChangeFilterInput = this.onChangeFilterInput.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.onChangeEditInput = this.onChangeEditInput.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentDidUpdate() {
    if (this.props.edit.idx !== -1 && this.props.edit.focusOnEdit === false) {
      const value = this.props.items[this.props.edit.idx];
      this.props.dispatch(editItem({ editItem: value, focusOnEdit: true }));
      this.refs.editInput.value = '';
      this.refs.editInput.focus();
      this.refs.editInput.value = value;
    }
  }
  render() {
    return (
      <div>
        <div className="todo-search">
          <input type="text" ref="filterInput" value={this.props.filter} onChange={this.onChangeFilterInput} placeholder="Search..."/>
        </div>
        {this.renderFilterText()}
        <div className="todo-list">
          <ul>
            {this.renderItems()}
          </ul>
        </div>
      </div>
    );
  }
  renderItems() {
    const filterReg = new RegExp(this.props.filter, 'i');
    const filteredItems = this.props.items.map((item, idx) => (filterReg) ? filterReg.test(item) : true);
    let filteredItemsCount = 0;
    const itemsJSX = this.props.items.map((item, idx) => {
      if (filteredItems[idx]) {
        filteredItemsCount++;
        const className = (this.props.selected.indexOf(idx) !== -1) ? 'selected' : '';
        if (this.props.edit.idx === idx) {
          return (
            <li className={className} key={idx}>
              <form onSubmit={this.saveChanges}>
                <input type="text" ref="editInput" value={this.props.editItem} onBlur={this.saveChanges} onChange={this.onChangeEditInput} placeholder="Edit todo..."/>
              </form>
            </li> 
          );
        } else {
          return (<li className={className} key={idx} data-idx={idx} onClick={this.onItemClick}>{item}</li>);
        }
      }
    });
    return (filteredItemsCount) ? itemsJSX : (<li className="empty">Results not found...</li>);
  }
  renderFilterText() {
    if (this.props.filter) {
      return (
        <p className="todo-filter">
          Filter: {this.props.filter}
          <a className="remove" onClick={this.resetFilter}>
            <i className="fa fa-times"></i>
          </a>
        </p>
      );
    }
  }
  onItemClick(e) {
    const config = {
      start: +e.target.getAttribute('data-idx')
    };
    if (e.ctrlKey) {
      config.type = 'multiple';
    } else if (e.shiftKey) {
      config.type = 'range';
    } else {
      config.type = 'one';
    }
    this.props.dispatch(selectItems(config));
  }
  onChangeFilterInput(e) {
    this.props.dispatch(filterItems(this.refs.filterInput.value));
  }
  resetFilter() {
    this.props.dispatch(filterItems(''));
  }
  onChangeEditInput() {
    this.props.dispatch(editItem({ editItem: this.refs.editInput.value }));
  }
  saveChanges(e) {
    e.preventDefault();
    this.props.dispatch(saveItem());
  }
}

export default connect(state => state)(TodoList);
