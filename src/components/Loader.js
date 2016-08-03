import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    let className = 'loader';
    className += (this.props.loader) ? ' show' : '';
    return (
      <div className={className}>
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Loader);
