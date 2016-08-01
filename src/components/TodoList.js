import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItems, saveItem, editItem } from '../actions'

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      filterText: '',
      editItem: '',
      focusOnEdit: false
    };
    this.dispatch = args[0].dispatch;
    this.onItemClick = this.onItemClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentDidUpdate() {
    if (this.props.edit !== -1 && this.state.focusOnEdit === false) {
      const value = this.props.items[this.props.edit];
      this.setState({ editItem: value, focusOnEdit: true });
      this.refs.editInput.value = '';
      this.refs.editInput.focus();
      this.refs.editInput.value = value;
    }
  }
  render() {
    return (
      <div>
        <div className="todo-search">
          <input type="text" name="filterText" value={this.state.filterText} onChange={this.onChangeInput} placeholder="Search..."/>
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
    const filterReg = new RegExp(this.state.filterText, 'i');
    const filteredItems = this.props.items.map((item, idx) => (filterReg) ? filterReg.test(item) : true);
    let filteredItemsCount = 0;
    const itemsJSX = this.props.items.map((item, idx) => {
      if (filteredItems[idx]) {
        filteredItemsCount++;
        const className = (this.props.selected.indexOf(idx) !== -1) ? 'selected' : '';
        if (this.props.edit === idx) {
          return (
            <li className={className} key={idx}>
              <form onSubmit={this.saveChanges}>
                <input type="text" name="editItem" ref="editInput" value={this.state.editItem} onBlur={this.saveChanges} onChange={this.onChangeInput} placeholder="Edit todo..."/>
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
    if (this.state.filterText) {
      return (
        <p className="todo-filter">
          Filter: {this.state.filterText}
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
    this.dispatch(selectItems(config));
  }
  onChangeInput(e) {
    this.setState({ [e.currentTarget.getAttribute('name')]: e.currentTarget.value });
    this.dispatch(selectItems());
  }
  resetFilter() {
    this.setState({ filterText: '' });
    this.dispatch(selectItems());
  }
  saveChanges(e) {
    e.preventDefault();
    const value = this.state.editItem.trim();
    this.dispatch(saveItem(this.props.edit, value));
    this.dispatch(editItem(-1));
    this.setState({ editItem: '', focusOnEdit: false });
  }
}

export default connect(state => state)(TodoList);
