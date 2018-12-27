import React from 'react';
import styled from 'styled-components';

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

export default ChatPanel;
