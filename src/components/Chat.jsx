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

const InputPanel = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  overflow: auto;
`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.onSendMessage = this.onSendMessage.bind(this);
  }
  onSendMessage() {
    this.setState();
  }
  render() {
    return (
      <Paper
        style={{ maxWidth: 600, height: '100%', marginBottom: 40, padding: 20 }}
      >
        <Header>
          <Typography variant="h4">Room</Typography>
        </Header>
        <ChatPanel>
          <Scrollable>
            <Card>
              <CardContent>
                <Typography variant="body1">teste</Typography>
              </CardContent>
            </Card>
          </Scrollable>
        </ChatPanel>
        <InputPanel>
          <TextField style={{ flex: '1' }} placeholder="Digite aqui..." />
          <Button
            onClick={this.onSendMessage}
            style={{ marginLeft: 20 }}
            mini
            variant="fab"
            color="primary"
          >
            <SendIcon />
          </Button>
        </InputPanel>
      </Paper>
    );
  }
}

export default Chat;
