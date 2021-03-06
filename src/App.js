import React, {Component, setState} from 'react';
import logo from './logo.svg';
import Form from './Form'
import './App.css';

const Test = () => <div>Testing</div>;

class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    lifeCycle: '',
  };
  handleStrings (str) {
    if (str === 'Hello World') return true;
    return false;
  }
  componentDidMount () {
    this.setState ({lifeCycle: 'componentDidMount'});
  }
  render () {
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
        <Form />
        <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
        <button
          onClick={() =>
            this.setState (prev => {
              return {
                on: !prev.on,
              };
            })}
        >
          Click
        </button>
        <h2>{this.state.input}</h2>
        <input
          type="text"
          onChange={e => this.setState ({input: e.currentTarget.value})}
        />
        <div>
          <a href="/" className="lifeCycle">{this.state.lifeCycle}</a>
        </div>
        <Test />
      </div>
    );
  }
}

export class Link extends Component {
  render () {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

export default App;
