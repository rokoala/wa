import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'typeface-roboto';
import Chat from './components/Chat.jsx';
import UserLogin from './components/UserLogin.jsx';
import ListUserChat from './components/ListUserChat.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      chatEnabled: false
    };

    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(username) {
    this.setState({ username, chatEnabled: true });
  }
  render() {
    return (
      <div>
        {this.state.chatEnabled ? (
          <Chat
            username={this.state.username}
            socketAdress="http://localhost:8000"
          />
        ) : (
          <UserLogin onLogin={this.onLogin} />
        )}
      </div>
    );
  }
}

export default hot(module)(App);
