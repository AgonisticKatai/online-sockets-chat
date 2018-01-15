import React, { Component } from "react";

import io from "socket.io-client";

import LoginForm from "components/LoginForm/LoginForm";
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
      user: null,
      messages: []
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  componentDidMount() {
    loadMessages(this.state.socket);
  }

  handleLogin = user => {
    this.setState({ user });
  };

  handleSendMessage = message => {
    const newMessage = {
      message: message,
      user: this.state.user,
      socket: this.state.socket.id
    };
    sendMessage(newMessage, this.state.socket);
  };

  renderLogin = () => {
    if(this.state.user) {
      return (
        <div>
          <MessagePanel messages={this.state.messages} />
          <InputForm sendMessage={this.handleSendMessage} />
        </div>
      )
    }
    return (
      <LoginForm login={this.handleLogin} />
    )
  }


  initSocket = () => {
    const socket = io(REACT_APP_API_SERVER);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("messages", messages => {
      this.setState({ messages });
    });
    socket.on("new-message", message => {
      const messages = [...this.state.messages, message];
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
          {this.renderLogin()}
        </div>
      </div>
    );
  }
}

export default App;
