import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import InputPanel from '../components/InputPanel';

class InputPanelContainer extends Component {
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
      this.socketClient.addMessage({
        author: this.props.username,
        text: this.state.message
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
        onSendMessage={this.onSendMessage}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  username: state.app.username,
  socketClient: state.app.socketClient
});

export default connect(mapStateToProps)(InputPanelContainer);
