import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'typeface-roboto';
import Chat from './components/Chat.jsx';
import UserLogin from './components/UserLogin.jsx';
import ListUserChat from './components/ListUserChat.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appLogin } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { username, chatEnabled } = this.props;
    return (
      <div>
        {chatEnabled ? (
          <Chat username={username} socketAdress="http://0.0.0.0:8000" />
        ) : (
          <UserLogin />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.app.username,
  chatEnabled: state.app.chatEnabled
});

export default connect(mapStateToProps)(hot(module)(App));
