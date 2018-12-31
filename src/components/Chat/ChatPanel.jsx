import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import CardMessage from '../CardMessage';

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

const ChatPanel = props => {
  const history = props.history.map(message => (
    <CardMessage key={message.id} message={message} fromMe={message.fromMe} />
  ));

  return (
    <Scrollable className={props.className} ref={props.panelRef}>
      <Content>
        {history}
        <EndMessage />
      </Content>
    </Scrollable>
  );
};

class ChatPanelContainer extends Component {
  constructor(props) {
    super(props);

    this.panelRef = React.createRef();
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
    this.onMessageReceived = this.onMessageReceived.bind(this);
  }
  componentDidMount() {
    this.props.socketClient.on('message', this.onMessageReceived);
    this.scrollChatToBottom();
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }
  componentWillUnmount() {
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
  bindActionCreators({ addMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPanelContainer);
