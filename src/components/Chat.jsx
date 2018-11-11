import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

const InputPanel = styled.form`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ChatPanel = styled.div`
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

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      message: ''
    };
    this.keyCount = 0;
    this.panelRef = React.createRef();
    this.onSendMessage = this.onSendMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this);
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }
  getKey() {
    return this.keyCount++;
  }
  onSendMessage(evt) {
    evt.preventDefault();
    if (this.state.message != '') {
      this.setState(prevState => {
        return {
          history: [
            ...prevState.history,
            {
              author: 'Rodrigo',
              text: this.state.message
            }
          ],
          message: ''
        };
      });
      this.inputMessage.focus();
    }
  }
  updateMessage(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  scrollChatToBottom() {
    this.panelRef.current.scrollTo(0, this.panelRef.current.scrollHeight);
  }
  render() {
    const history = this.state.history.map(message => {
      return (
        <Card key={this.getKey()} style={{ margin: 3 }}>
          <CardContent>
            <Typography
              style={{ color: 'lightgreen', fontWeight: 'bold' }}
              gutterBottom
            >
              {message.author}
            </Typography>
            <Typography variant="body1">{message.text}</Typography>
          </CardContent>
        </Card>
      );
    });

    const messageInputRef = input => {
      this.inputMessage = input;
    };

    return (
      <Paper
        style={{ maxWidth: 600, height: '100%', marginBottom: 40, padding: 20 }}
      >
        <Header>
          <Typography variant="h4">Room</Typography>
        </Header>
        <ChatPanel>
          <Scrollable ref={this.panelRef}>
            {history}
            <EndMessage />
          </Scrollable>
        </ChatPanel>
        <InputPanel>
          <TextField
            autoFocus
            inputRef={messageInputRef}
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
        </InputPanel>
      </Paper>
    );
  }
}

export default Chat;
