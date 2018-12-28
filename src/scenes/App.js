import 'typeface-roboto';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../components/Chat';
import Lobby from '../components/Lobby';
import Login from '../components/Login';
import Geolocation from '../resources/Geolocation';
import { setLocation, setSocketClient } from '../actions';
import SocketClient from 'socket.io-client';
import styled from 'styled-components';

const StyledLobby = styled(Lobby)`
  flex: 0 1 20%;
  border-right: 1px solid lightgray;
`;

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledChat = styled(Chat)`
  flex: 1;
`;

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
  componentWillMount() {
    const { setSocketClient } = this.props;
    setSocketClient(new SocketClient('http://localhost:8000'));
  }
  render() {
    const { chatEnabled, location } = this.props;
    return chatEnabled && location ? (
      <AppWrapper>
        <StyledLobby />
        <StyledChat />
      </AppWrapper>
    ) : (
      <Login />
    );
  }
}

const mapStateToProps = state => ({
  chatEnabled: state.app.chatEnabled,
  location: state.app.location
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setLocation, setSocketClient }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(module)(App));
