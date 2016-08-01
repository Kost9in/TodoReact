import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoActions from './TodoActions';
import { setItems } from '../actions'

class App extends Component {
  constructor(...args) {
    super(...args);
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
}

export default connect()(App);
