import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../actions';

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const InputPanel = props => (
  <Wrapper className={props.className}>
    <TextField
      autoFocus
      inputRef={props.messageInputRef}
      style={{ flex: '1' }}
      value={props.message}
      onChange={props.onInputTextChange}
      placeholder="Digite aqui..."
    />
    <Button
      onClick={props.onSendMessage}
      style={{ marginLeft: 20 }}
      mini
      variant="fab"
      color="primary"
      type="submit"
    >
      <SendIcon />
    </Button>
  </Wrapper>
);

class InputPanelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.socketClient = this.props.socketClient;
    this.messageInputRef = this.messageInputRef.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }
  messageInputRef(input) {
    this.inputMessage = input;
  }
  handleTextInputChange(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  onSendMessage(evt) {
    evt.preventDefault();
    if (this.state.message != '') {
      this.props.sendMessage({
        author: this.props.username,
        text: this.state.message,
        roomId: this.props.roomId
      });

      this.inputMessage.focus();
      this.setState({ message: '' });
    }
  }
  render() {
    return (
      <InputPanel
        messageInputRef={this.messageInputRef}
        message={this.state.message}
        onInputTextChange={this.handleTextInputChange}
        onSendMessage={this.onSendMessage}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  username: state.app.username,
  roomId: state.app.room.id,
  socketClient: state.app.socketClient
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPanelContainer);
