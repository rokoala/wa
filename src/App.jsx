import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SocketIOClient from 'socket.io-client';
import Chat from './components/Chat.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Chat socketAdress="http://localhost:8000" />
      </div>
    );
  }
}

export default hot(module)(App);
