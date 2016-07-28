import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoActions from './TodoActions';

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      items: [1, 2, 3, 4],
      selected: []
    };
  }
  render() {
    return (
      <div>
        <div className="todo-wrapper">
          <TodoList items={this.state.items} selected={this.state.selected} selectItems={(e) => this.selectItems(e)}/>
          <TodoAddForm  addItem={(newItem) => this.addItem(newItem)}/>
        </div>
        <TodoActions editItem={() => this.editItem()} deleteItems={() => this.deleteItems()}/>
      </div>
    );
  }
  selectItems() {
    console.log('select item');
  }
  addItem(newItem) {
    this.state.items.push(newItem);
    this.setState({ items: this.state.items });
  }
  editItem() {
    console.log('edit item');
  }
  deleteItems() {
    console.log('delete items');
  }
}
