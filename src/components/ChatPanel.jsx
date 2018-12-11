import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SocketClient from '../resources/SocketClient';
import CardMessage from './CardMessage';
import { addMessage } from '../actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    const history = this.props.history.map(message => (
      <CardMessage key={message.id} message={message} fromMe={message.fromMe} />
    ));

    return (
      <Scrollable className={this.props.className} ref={this.panelRef}>
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
  history: state.chat.history,
  socketClient: state.app.socketClient
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPanel);
