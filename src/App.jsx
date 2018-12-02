import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'typeface-roboto';
import Chat from './components/Chat.jsx';
import UserLogin from './components/UserLogin.jsx';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { chatEnabled } = this.props;
    return (
      <div>
        {chatEnabled ? (
          <Chat socketAdress="http://localhost:8000" />
        ) : (
          <UserLogin />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatEnabled: state.app.chatEnabled
});

export default connect(mapStateToProps)(hot(module)(App));
