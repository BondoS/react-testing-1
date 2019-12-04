import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => <div>Testing</div>;

function App () {
  const [on, setOn] = useState (false);
  const [input, setInput] = useState ('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
      <button onClick={() => setOn (!on)}>Click</button>
      <h2>{input}</h2>
      <input type="text" onChange={e => setInput (e.currentTarget.value)} />
      <Test />
    </div>
  );
}

export class Link extends Component {
  render () {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

export default App;
