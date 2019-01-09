import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardMessage from '../CardMessage';
import { uid } from 'react-uid';

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
    <CardMessage
      key={uid(message)}
      message={message}
      fromMe={message.userId === props.userId}
    />
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
  }
  componentDidMount() {
    this.scrollChatToBottom();
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
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
  userId: state.app.user.id,
  history: state.app.room.lastMessages
});

export default connect(mapStateToProps)(ChatPanelContainer);
