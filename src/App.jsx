import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SocketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:8000',
      color: 'white'
    };
    this.send = this.send.bind(this);
  }

  // method for emitting a socket.io event
  send() {
    const socket = SocketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color);
  }

  setColor(color) {
    this.setState({ color });
  }
  render() {
    const socket = SocketIOClient(this.state.endpoint);

    socket.on('change color', color => {
      document.body.style.backgroundColor = color;
    });

    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>
          Blue
        </button>
        <button id="red" onClick={() => this.setColor('red')}>
          Red
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
