import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomForm from './RoomForm';
import SubscribedRoomList from './SubscribedRoomList';
import styled from 'styled-components';

const LobbyWrapper = styled.div`
  background-color: #f7f7f7;
`;

class Lobby extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { showRoomForm } = this.props;
    return (
      <LobbyWrapper className={this.props.className}>
        {showRoomForm ? <RoomForm /> : <SubscribedRoomList />}
      </LobbyWrapper>
    );
  }
}

const mapStateToProps = state => ({
  showRoomForm: state.app.showRoomForm
});

export default connect(mapStateToProps)(Lobby);
