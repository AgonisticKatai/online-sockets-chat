import React, { Component } from "react";

import io from "socket.io-client";

import InputForm from "components/InputForm/Inputform";
import MessagePanel from "components/MessagePanel/MessagePanel";
import { sendMessage, loadMessages } from "services/eventServices";

import "./App.css";

const { REACT_APP_API_SERVER } = process.env;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      messages: []
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  componentDidMount() {
    loadMessages(this.state.socket);
  }

  handleSendMessage = message => {
    const newMessage = {
      message: message,
      socket: this.state.socket.id
    };
    sendMessage(newMessage, this.state.socket);
  };

  initSocket = () => {
    const socket = io(REACT_APP_API_SERVER);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("messages", messages => {
      this.setState({ messages });
    });
    socket.on("new-message", message => {
      const messages = [...this.state.messages, message]
      this.setState({ messages });
    });
    this.setState({ socket });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">Online Sockets Chat</h1>
        </header>
        <div className="container-fluid">
          <InputForm sendMessage={this.handleSendMessage} />
          <MessagePanel messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
