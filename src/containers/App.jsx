import 'typeface-roboto';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatManagerContainer from './ChatManagerContainer';
import LobbyContainer from './LobbyContainer';
import UserLogin from './UserLogin';
import Geolocation from '../resources/Geolocation';
import { setLocation } from '../actions';
import styled from 'styled-components';

const StyledLobbyContainer = styled(LobbyContainer)`
  flex: 0 1 20%;
  border-right: 1px solid lightgray;
`;

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledChat = styled(ChatManagerContainer)`
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
  render() {
    const { chatEnabled, location } = this.props;
    return chatEnabled && location ? (
      <AppWrapper>
        <StyledLobbyContainer />
        <StyledChat socketAdress="http://localhost:8000" />
      </AppWrapper>
    ) : (
      <UserLogin />
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
