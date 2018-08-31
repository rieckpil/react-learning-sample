import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should have input fields', () => {
    const wrapper = shallow(
      <App/>
    );
    expect(wrapper.contains( <h1 className="App-title">Welcome to React</h1>)).toBe(true);
});
