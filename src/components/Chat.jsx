import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core/';
import styled from 'styled-components';
import SocketClient from './SocketClient.js';
import InputPanel from './InputPanel.jsx';
import ChatPanel from './ChatPanel.jsx';
import ListUserChat from './ListUserChat.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage, toogleRoomInfo } from '../actions';

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

    this.socketClient = new SocketClient(props.socketAdress);
    this.socketClient.addUser(this.props.username);

    this.displayRoomInfo = this.displayRoomInfo.bind(this);
  }
  displayRoomInfo() {
    this.props.toogleRoomInfo();
  }
  render() {
    return (
      <Paper
        style={{ maxWidth: 600, height: '100%', marginBottom: 40, padding: 20 }}
      >
        {this.props.roomInfo ? (
          <ListUserChat socketClient={this.socketClient} />
        ) : (
          <React.Fragment>
            <Header onClick={this.displayRoomInfo}>
              <Typography variant="h4">Room</Typography>
            </Header>
            <ChatPanel socketClient={this.socketClient} />
            <InputPanel socketClient={this.socketClient} />
          </React.Fragment>
        )}
      </Paper>
    );
  }
}

Chat.propTypes = {
  socketAdress: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  roomInfo: state.app.roomInfo,
  username: state.app.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addMessage, toogleRoomInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
