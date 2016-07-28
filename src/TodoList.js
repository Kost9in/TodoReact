import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: this.props.items,
      filterText: ''
    };
  }
  render() {
    return (
      <div>
        <div className="todo-search">
          <input type="text" name="filterText" value={this.state.filterText} onChange={(e) => this.onChangeInput(e)} placeholder="Search..."/>
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
    const filteredItems = this.state.items.map((item, idx) => (filterReg) ? filterReg.test(item) : true);
    let itemsCount = 0;
    const itemsJSX = this.state.items.map((item, idx) => {
      if (filteredItems[idx]) {
        itemsCount++;
        return (<li key={idx} onClick={(e) => this.props.selectItems(e)}>{item}</li>);
      }
    });
    if (itemsCount) return itemsJSX;
    else return (<li className="empty">Results not found...</li>);
  }
  renderFilterText() {
    if (this.state.filterText) {
      return (
        <p className="todo-filter">
          Filter: {this.state.filterText}
          <a className="remove" onClick={() => {this.resetFilter();}}>
            <i className="fa fa-times"></i>
          </a>
        </p>
      );
    }
  }
  onChangeInput(e) {
    this.setState({ [e.currentTarget.getAttribute('name')]: e.currentTarget.value.trim() });
  }
  resetFilter() {
    this.setState({ filterText: '' });
  }
}
