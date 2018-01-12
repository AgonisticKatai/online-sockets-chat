import React, { Component } from "react";

import InputForm from "components/InputForm/Inputform";
import MessagePanel from "components/MessagePanel/MessagePanel";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Online Sockets Chat</h1>
        </header>
        <InputForm />
        <MessagePanel />
      </div>
    );
  }
}

export default App;
