import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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
      onChange={props.updateMessage}
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

export default InputPanel;
