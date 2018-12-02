import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocketClient from './SocketClient.js';
import CardMessage from './CardMessage.jsx';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../actions';

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

class ChatPanel extends Component {
  constructor(props) {
    super(props);

    this.panelRef = React.createRef();
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }
  componentDidMount() {
    this.props.socketClient.registerMessageHandler(this.onMessageReceived);
    this.scrollChatToBottom();
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }
  componentWillUnmount() {
    this.props.socketClient.unregisterMessageHandler();
  }
  onMessageReceived(message) {
    this.props.addMessage(message);
  }
  scrollChatToBottom() {
    setTimeout(() => {
      this.panelRef.current.scrollTo(0, this.panelRef.current.scrollHeight);
    }, 100);
  }
  render() {
    const history = this.props.history.map(message => {
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

const mapStateToProps = state => ({
  history: state.chat.history
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPanel);
