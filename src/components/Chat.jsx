import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import SocketClient from './SocketClient.js';
import InputPanel from './InputPanel.jsx';
import ChatPanel from './ChatPanel.jsx';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      message: ''
    };

    this.socketClient = new SocketClient(props.socketAdress);
  }
  render() {
    return (
      <Paper
        style={{ maxWidth: 600, height: '100%', marginBottom: 40, padding: 20 }}
      >
        <Header>
          <Typography variant="h4">Room</Typography>
        </Header>
        <ChatPanel socketClient={this.socketClient} />
        <InputPanel socketClient={this.socketClient} />
      </Paper>
    );
  }
}

Chat.propTypes = {
  socketAdress: PropTypes.string.isRequired
};

export default Chat;
