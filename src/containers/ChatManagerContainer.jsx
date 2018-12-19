import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addMessage,
  addSocketClient,
  toogleRoomInfo,
  setRoom
} from '../actions';
import SocketClient from '../resources/SocketClient';
import ListUserChatContainer from './ListUserChatContainer';
import NoRoom from '../components/NoRoom';
import styled from 'styled-components';
import Chat from '../components/Chat';

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;

class ChatManagerContainer extends Component {
  constructor(props) {
    super(props);

    this.socketClient = new SocketClient(props.socketAdress);
    this.props.addSocketClient(this.socketClient);

    this.socketClient.addUser(this.props.username);

    this.onCloseRoomInfo = this.onCloseRoomInfo.bind(this);
    this.handleHeaderChatClick = this.handleHeaderChatClick.bind(this);
  }
  onCloseRoomInfo() {
    this.props.toogleRoomInfo();
  }
  handleHeaderChatClick() {
    this.props.toogleRoomInfo();
  }
  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.props.roomInfo ? (
          <ListUserChatContainer onClose={this.onCloseRoomInfo} />
        ) : (
          <Content>
            {this.props.room ? (
              <Chat
                room={this.props.room}
                onHeaderClick={this.handleHeaderChatClick}
              />
            ) : (
              <NoRoom />
            )}
          </Content>
        )}
      </Wrapper>
    );
  }
}

ChatManagerContainer.propTypes = {
  socketAdress: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  roomInfo: state.app.roomInfo,
  room: state.app.room,
  username: state.app.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addMessage, toogleRoomInfo, addSocketClient, setRoom },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatManagerContainer);
