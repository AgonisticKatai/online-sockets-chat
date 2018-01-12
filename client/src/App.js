import React, { Component } from "react";

import io from "socket.io-client";

import InputForm from "components/InputForm/Inputform";
import MessagePanel from "components/MessagePanel/MessagePanel";
import sendMessage from "services/eventServices";

import "./App.css";

const { REACT_APP_API_SERVER } = process.env;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.initSocket();
  }

  handleSendMessage = message => {
    console.log("send message...");
  };

  initSocket = () => {
    const socket = io(REACT_APP_API_SERVER);
    socket.on("connect", e => {
      console.log("connect", e);
    });
    socket.on("event", e => {
      console.log("event", e);
    });
    socket.on("disconnect", e => {
      console.log("disconnect", e);
    });
    console.log(socket);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">Online Sockets Chat</h1>
        </header>
        <div className="container-fluid">
          <InputForm sendMessage={this.handleSendMessage} />
          <MessagePanel />
        </div>
      </div>
    );
  }
}

export default App;
