import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toogleRoomInfo } from '../../actions';
import { Typography } from '@material-ui/core/';
import ListUsers from '../ListUsers';
import NoRoom from '../NoRoom/NoRoom';
import InputPanel from './InputPanel';
import ChatPanel from './ChatPanel';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6cc7ae;
  padding: 13px 30px;
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
  const { name } = props.room;
  return (
    <React.Fragment>
      <Header onClick={props.onHeaderClick}>
        <Typography
          style={{ color: 'white', fontWeight: 'lighter' }}
          variant="h5"
        >
          {name}
        </Typography>
      </Header>
      <ChatWrapper>
        <StyledChatPanel />
        <StyledInputPanel />
      </ChatWrapper>
    </React.Fragment>
  );
};

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.onCloseRoomInfo = this.onCloseRoomInfo.bind(this);
    this.handleHeaderChatClick = this.handleHeaderChatClick.bind(this);
  }
  onCloseRoomInfo() {
    this.props.toogleRoomInfo();
  }
  handleHeaderChatClick() {
    this.props.toogleRoomInfo();
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.roomInfo ? (
          <ListUsers onClose={this.onCloseRoomInfo} />
        ) : (
          <Content>
            {this.props.room ? (
              <Chat
                room={this.props.room}
                onHeaderClick={this.handleHeaderChatClick}
              />
            ) : (
              <NoRoom />
            )}
          </Content>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roomInfo: state.app.roomInfo,
  room: state.app.room,
  username: state.app.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleRoomInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
