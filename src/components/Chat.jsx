import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core/';
import styled from 'styled-components';
import SocketClient from './SocketClient.js';
import InputPanel from './InputPanel.jsx';
import ChatPanel from './ChatPanel.jsx';
import ListUserChat from './ListUserChat.jsx';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 0 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      message: '',
      roomInfo: false,
      username: this.props.username
    };

    this.socketClient = new SocketClient(props.socketAdress);

    this.socketClient.addUser(this.props.username);

    this.onMessageAdd = this.onMessageAdd.bind(this);
    this.displayRoomInfo = this.displayRoomInfo.bind(this);
    this.onListUserChatClose = this.onListUserChatClose.bind(this);
    this.onMessageAdd = this.onMessageAdd.bind(this);
    this.chanelPanel = React.createRef();
  }
  onMessageAdd(message) {
    message.fromMe = true;
    this.setState(prevState => {
      return {
        history: [...prevState.history, message]
      };
    });
    this.chanelPanel.current.addMessage(message);
  }
  onListUserChatClose(evt) {
    this.setState({ roomInfo: false });
  }
  displayRoomInfo() {
    this.setState({ roomInfo: true });
  }
  render() {
    return (
      <Paper
        style={{ maxWidth: 600, height: '100%', marginBottom: 40, padding: 20 }}
      >
        {this.state.roomInfo ? (
          <ListUserChat
            socketClient={this.socketClient}
            onClose={this.onListUserChatClose}
          />
        ) : (
          <React.Fragment>
            <Header onClick={this.displayRoomInfo}>
              <Typography variant="h4">Room</Typography>
            </Header>
            <ChatPanel
              socketClient={this.socketClient}
              initHistory={this.state.history}
              ref={this.chanelPanel}
            />
            <InputPanel
              username={this.state.username}
              socketClient={this.socketClient}
              onMessageAdd={this.onMessageAdd}
            />
          </React.Fragment>
        )}
      </Paper>
    );
  }
}

Chat.propTypes = {
  socketAdress: PropTypes.string.isRequired
};

export default Chat;
