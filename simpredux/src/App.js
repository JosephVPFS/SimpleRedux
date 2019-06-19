import React, { Component } from 'react';
// new lines from here
import { connect } from "react-redux";
import {startAction} from "./actions/startAction";
import {stopAction} from "./actions/stopAction";

//// new lines to here

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
        <img 
            src={logo} 
            className={
              "App-logo" + 
              (this.props.rotating ? "":" App-logo-paused")
            } 
            alt="logo" 
            onClick={
              console.log("Clicked")
            }
          />
          <p onClick={(console.log("Helo"))}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);