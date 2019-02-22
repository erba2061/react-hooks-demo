import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div>
          {this.props.classComponent}
        </div>
        <div>
          {this.props.hookComponent}
        </div>
      </div>
    );
  }
}

export default Container;