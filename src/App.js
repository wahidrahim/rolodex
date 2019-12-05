import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  newString = 'testing'

  constructor() {
    super();

    this.state = {
      greeting: "Hello World"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.greeting}</p>
          <button
            onClick={() => {
              this.setState({ greeting: this.newString }, () => {
                console.log("test");
              });
            }}
          >
            change string
          </button>
        </header>
      </div>
    );
  }
}

export default App;
