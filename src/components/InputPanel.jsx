import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export default class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.socketClient = this.props.socketClient;
    this.messageInputRef = this.messageInputRef.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }
  messageInputRef(input) {
    this.inputMessage = input;
  }
  updateMessage(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  onSendMessage(evt) {
    evt.preventDefault();
    if (this.state.message != '') {
      const msg = this.socketClient.addMessage(this.state.message);
      this.props.onMessageAdd(msg);
      this.inputMessage.focus();
      this.setState({ message: '' });
    }
  }
  render() {
    return (
      <Wrapper>
        <TextField
          autoFocus
          inputRef={this.messageInputRef}
          style={{ flex: '1' }}
          value={this.state.message}
          onChange={this.updateMessage}
          placeholder="Digite aqui..."
        />
        <Button
          onClick={this.onSendMessage}
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
  }
}

InputPanel.propTypes = {
  onMessageAdd: PropTypes.func
};
