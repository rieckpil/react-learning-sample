import React, { Component } from 'react';
import logo from './logo.svg';

import { Route, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    const Atlantic = () => (
      <div>
        <h3>Atlantic Ocean</h3>
        <p>
        The Atlantic Ocean covers approximately 1/5th of the
        surface of the earth.
        </p>
      </div>
    );
    const Pacific = () => (
      <div>
        <h3>Pacific Ocean</h3>
        <p>
        Ferdinand Magellan, a Portuguese explorer, named the ocean
        'mar pacifico' in 1521, which means peaceful sea.
        </p>
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>        
        <div className="App-intro">
          <ul>
            <li>
              <Link to='/one'><code>/one</code></Link>
            </li>
            <li>
              <Link to='/two'><code>/two</code></Link>
            </li>
            <li>
              <Link to='/three'><code>/three</code></Link>
            </li>
          </ul>
          <Route path='/one' render={() => (
            <div>
            <h3>Atlantic Ocean — Again!</h3>
            <p>
            Also known as "The Pond."
            </p>
            </div>
          )} />
          <Route path='/two' component={Atlantic} />
          <Route path='/three' component={Pacific} />
        </div>
      </div>
    );
  }
}

export default App;
