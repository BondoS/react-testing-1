import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expectExport from 'expect';

configure({ adapter: new Adapter() });

describe('<App />', ()=> {
  it('should contain p element', () => {
    const wrapper = shallow(<App />);
    expectExport(wrapper.find('.App-header').children().length).toBe(3);
  })
})