import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoActions from './TodoActions';
import { setItems } from '../actions'

class App extends Component {
  constructor(...args) {
    super(...args);
    this.dispatch = args[0].dispatch;
    this.dispatch(setItems(this.getItems()));
  }
  render() {
    return (
      <div>
        <div className="todo-wrapper">
          <TodoList/>
          <TodoAddForm/>
        </div>
        <TodoActions/>
      </div>
    );
  }
  getItems() {
    return (localStorage.items) ? JSON.parse(localStorage.items) : ['Test item 1', 'Test item 2', 'Test item 3'];
  }
}

export default connect()(App);
