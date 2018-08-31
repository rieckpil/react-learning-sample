import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormsComponent from './components/FormsComponent';

class App extends Component {

  state = {
    disabled: true
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button disabled={this.state.disabled}>Click me</button>
        <div className="App-intro">
          <FormsComponent/>
        </div>
      </div>
    );
  }
}

export default App;
