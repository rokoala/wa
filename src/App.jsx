import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'typeface-roboto';
import Chat from './components/Chat.jsx';
import UserLogin from './components/UserLogin.jsx';
import { connect } from 'react-redux';
import Geolocation from './resources/Geolocation';
import { bindActionCreators } from 'redux';
import { setLocation } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    Geolocation.getLocation().then(
      pos => {
        this.props.setLocation(pos.coords);
      },
      err => {
        console.error('Error to get geolocation, error:' + err);
      }
    );
  }
  render() {
    const { chatEnabled, location } = this.props;
    return (
      <div>
        {chatEnabled && location ? (
          <Chat socketAdress="http://localhost:8000" />
        ) : (
          <UserLogin />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatEnabled: state.app.chatEnabled,
  location: state.app.location
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setLocation }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
