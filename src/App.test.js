import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expectExport from 'expect';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<App />', ()=> {
  it('should contain correct number of elements', () => {
    const wrapper = shallow(<App />);
    expectExport(wrapper.find('.App-header').children().length).toBe(3);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  })
})