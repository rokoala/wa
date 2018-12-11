import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core/';
import {
  addMessage,
  addSocketClient,
  toogleRoomInfo,
  setRoom
} from '../actions';
import SocketClient from '../resources/SocketClient';
import InputPanel from './InputPanel';
import ChatPanel from './ChatPanel';
import ListUserChatContainer from './ListUserChatContainer';
import NoRoom from '../components/NoRoom';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

const ChatWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;

const StyledChat = styled(ChatPanel)`
  flex: 9;
  padding: 15px;
`;

const StyledInputPanel = styled(InputPanel)`
  flex: 1;
`;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.socketClient = new SocketClient(props.socketAdress);
    this.props.addSocketClient(this.socketClient);

    this.socketClient.addUser(this.props.username);

    this.displayRoomInfo = this.displayRoomInfo.bind(this);
    this.onCloseRoomInfo = this.onCloseRoomInfo.bind(this);
  }
  onCloseRoomInfo() {
    this.props.toogleRoomInfo();
  }
  displayRoomInfo() {
    if (this.props.room) this.props.toogleRoomInfo();
  }
  render() {
    const title = this.props.room ? 'Room Name' : 'wa';
    return (
      <Wrapper className={this.props.className}>
        {this.props.roomInfo ? (
          <ListUserChatContainer onClose={this.onCloseRoomInfo} />
        ) : (
          <Content>
            {this.props.room ? (
              <React.Fragment>
                <Header onClick={this.displayRoomInfo}>
                  <Typography variant="h4">{title}</Typography>
                </Header>
                <ChatWrapper>
                  <StyledChat />
                  <StyledInputPanel />
                </ChatWrapper>
              </React.Fragment>
            ) : (
              <NoRoom />
            )}
          </Content>
        )}
      </Wrapper>
    );
  }
}

Chat.propTypes = {
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
)(Chat);
