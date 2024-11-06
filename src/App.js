import React, { Component } from 'react';

class MyClassComponent extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Event handler to update the state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
