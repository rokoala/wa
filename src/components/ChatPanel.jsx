import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocketClient from './SocketClient.js';
import CardMessage from './CardMessage.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

const Scrollable = styled.div`
  height: 500px;
  overflow: auto;
`;

const EndMessage = styled.div`
  float:left
  clear:'both'
`;

export default class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };

    this.socketClient = this.props.socketClient;

    this.panelRef = React.createRef();
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);

    this.socketClient.onMessageReceived(this.onMessageReceived);
  }
  addMessage(message) {
    this.setState(prevState => {
      return {
        history: [...prevState.history, message]
      };
    });
    this.scrollChatToBottom();
  }
  onMessageReceived(message) {
    this.addMessage(message);
    this.scrollChatToBottom();
  }
  scrollChatToBottom() {
    setTimeout(() => {
      this.panelRef.current.scrollTo(0, this.panelRef.current.scrollHeight);
    }, 100);
  }
  render() {
    const history = this.state.history.map(message => {
      return (
        <CardMessage
          key={message.id}
          message={message}
          fromMe={message.fromMe}
        />
      );
    });

    return (
      <Wrapper>
        <Scrollable ref={this.panelRef}>
          {history}
          <EndMessage />
        </Scrollable>
      </Wrapper>
    );
  }
}

ChatPanel.propTypes = {
  socketClient: PropTypes.instanceOf(SocketClient)
};
