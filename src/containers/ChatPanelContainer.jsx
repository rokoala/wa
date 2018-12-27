import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage, fetchChatMessages } from '../actions';
import ChatPanel from '../components/ChatPanel';

class ChatPanelContainer extends Component {
  constructor(props) {
    super(props);

    this.panelRef = React.createRef();
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }
  componentDidMount() {
    this.props.socketClient.on('message', this.onMessageReceived);

    // this.props.fetchChatMessages();
    this.scrollChatToBottom();
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }
  componentWillUnmount() {
    // this.props.socketClient  .unregisterMessageHandler();
    this.props.socketClient.off('message');
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
    return <ChatPanel panelRef={this.panelRef} {...this.props} />;
  }
}

const mapStateToProps = state => ({
  history: state.chat.history,
  socketClient: state.app.socketClient
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addMessage, fetchChatMessages }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPanelContainer);
