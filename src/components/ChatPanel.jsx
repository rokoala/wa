import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocketClient from './SocketClient.js';
import CardMessage from './CardMessage.jsx';
import styled from 'styled-components';

const Scrollable = styled.div`
  height: 500px;
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const EndMessage = styled.div`
  float:left
  clear:'both'
`;

export default class ChatPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.initHistory
    };

    this.panelRef = React.createRef();
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
  }
  componentDidMount() {
    this.scrollChatToBottom();
  }
  addMessage(message) {
    this.setState(prevState => {
      return {
        history: [...prevState.history, message]
      };
    });
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
      <Scrollable ref={this.panelRef}>
        <Content>
          {history}
          <EndMessage />
        </Content>
      </Scrollable>
    );
  }
}

ChatPanel.propTypes = {
  socketClient: PropTypes.instanceOf(SocketClient)
};
