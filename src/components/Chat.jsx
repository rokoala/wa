import React from 'react';
import styled from 'styled-components';
import InputPanel from './InputPanel';
import ChatPanel from './ChatPanel';
import { Typography } from '@material-ui/core/';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
  cursor: pointer;
`;

const ChatWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const StyledChatPanel = styled(ChatPanel)`
  flex: 9;
  padding: 15px;
`;

const StyledInputPanel = styled(InputPanel)`
  flex: 1;
`;

const Chat = props => {
  return (
    <React.Fragment>
      <Header onClick={props.onHeaderClick}>
        <Typography variant="h4">{props.title}</Typography>
      </Header>
      <ChatWrapper>
        <StyledChatPanel />
        <StyledInputPanel />
      </ChatWrapper>
    </React.Fragment>
  );
};

export default Chat;
