import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showErrorMessage: false
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
      showErrorMessage: false
    });
  }

  decrementCounter = () => {
    if(this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ showErrorMessage: true });
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button 
          onClick={this.incrementCounter} 
          data-test="increment-button"
        >
          Increment Counter
        </button>
        <button 
          onClick={this.decrementCounter} 
          data-test="decrement-button"
        >
          Decrement Counter
        </button>
        {this.state.showErrorMessage && (
          <h2 style={{color: 'red'}} data-test="error-message">Can Not Decrement After Zero!</h2>
        )}
      </div>
    );
  }
}

export default App;
