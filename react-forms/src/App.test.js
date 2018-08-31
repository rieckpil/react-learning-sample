import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import FormsComponent from './components/FormsComponent';

describe('App', () => {
  const myMock = jest.fn();
  console.log(myMock.mock.calls);
  myMock('HelloWorld');
  console.log(myMock.mock.calls);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have h1', () => {
      expect(wrapper.contains(<h1 className="App-title">Welcome to React</h1>)).toBe(true);
  });

  it('should have forms component', () => {
    expect(wrapper.contains(<FormsComponent/>)).toBe(true);
  });

  it('button should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });

});

