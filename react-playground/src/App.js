import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import classNames from 'classnames';

class App extends React.Component {

  state = {
    isAlert: true,
    isDangerous: false
  }

  changeColor = () => {
    this.setState({isAlert: !this.state.isAlert, isDangerous: !this.state.isDangerous})
  }

  render() {

    const clazzes = classNames({
      box: true,
      alert: this.state.isAlert,
      dangerous: this.state.isDangerous
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header headerText="Props are immutable" amount={3}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={clazzes}>Style with with classnames()</p>
        <ul>
          <li>phone: {'\u260E'}</li>
          <li>star: {'\u2606'}</li>
          <li>dolphin: {'\uD83D\uDC2C'}</li>
        </ul>
        <button onClick={this.changeColor}>Change color</button>
        <Timer/>
      </div>
    );
  }
}

export default App;
