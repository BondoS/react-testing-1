import React from 'react';
import ReactDOM from 'react-dom';
import App, {Link} from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expectExport from 'expect';
import toJson from 'enzyme-to-json';

configure ({adapter: new Adapter ()});

describe ('<App />', () => {
  it ('should contain correct number of elements', () => {
    const wrapper = shallow (<App />);
    expectExport (wrapper.find ('.App-header').children ().length).toBe (3);
  });
  it ('matches the snapshot', () => {
    const tree = shallow (<App />);
    expect (toJson (tree)).toMatchSnapshot ();
  });
});

describe ('<Link />', () => {
  it ('link component accepts address prop', () => {
    const wrapper = shallow (<Link address="www.google.com" />);
    expect (wrapper.instance ().props.address).toBe ('www.google.com');
  });
  it ('a tag renders href correctly', () => {
    const wrapper = shallow (<Link address="www.google.com" />);
    expect (wrapper.props ().href).toBe ('www.google.com');
  });
  it ('returns null with true hide prop', () => {
    const wrapper = shallow (<Link hide={false} />);
    expect (wrapper.find ('a').length).toBe (1);
    wrapper.setProps ({hide: true});
    expect (wrapper.get (0)).toBeNull ();
  });
});
