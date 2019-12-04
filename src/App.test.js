import React from 'react';
import ReactDOM from 'react-dom';
import App, {Link} from './App';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expectExport from 'expect';
import toJson from 'enzyme-to-json';

configure ({adapter: new Adapter ()});

describe ('<App /> shallow rendering', () => {
  it ('should contain correct number of elements', () => {
    const wrapper = shallow (<App />);
    expectExport (wrapper.find ('.App-header').children ().length).toBe (3);
  });
  it ('matches the snapshot', () => {
    const tree = shallow (<App />);
    expect (toJson (tree)).toMatchSnapshot ();
  });
  it ('updates className with new State', () => {
    const wrapper = shallow (<App />);
    expect (wrapper.find ('.blue').length).toBe (1);
    expect (wrapper.find ('.red').length).toBe (0);
    wrapper.setState ({mainColor: 'red'});
    expect (wrapper.find ('.blue').length).toBe (0);
    expect (wrapper.find ('.red').length).toBe (1);
  });
  it ('on button click changes p text', () => {
    const wrapper = shallow (<App />);
    const button = wrapper.find ('button');
    expect (wrapper.find ('.button-state').text ()).toBe ('No!');
    button.simulate ('click');
    expect (wrapper.find ('.button-state').text ()).toBe ('Yes!');
  });
  it ('on input change, title changes text', () => {
    const wrapper = shallow (<App />);
    const input = wrapper.find ('input');
    expect (wrapper.find ('h2').text ()).toBe ('');
    input.simulate ('change', {currentTarget: {value: 'Tyler'}});
    expect (wrapper.find ('h2').text ()).toBe ('Tyler');
  });
  it ('calls componentDidMount, update p tag text', () => {
    jest.spyOn (App.prototype, 'componentDidMount');
    const wrapper = shallow (<App />);
    expect (App.prototype.componentDidMount.mock.calls.length).toBe (1);
    expect (wrapper.find ('.lifeCycle').text ()).toBe ('componentDidMount');
  });
});

describe ('<App /> mount rendering', () => {
  it ('should contain correct number of elements', () => {
    const wrapper = mount (<App />);
    expectExport (wrapper.find ('.App-header').children ().length).toBe (3);
    wrapper.unmount ();
  });
  it ('matches the snapshot', () => {
    const tree = mount (<App />);
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
