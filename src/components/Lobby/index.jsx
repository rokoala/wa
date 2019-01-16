import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRoomList, setRoomFormVisibility } from '../../actions';
import RoomForm from './RoomForm';
import SubscribedRoomList from './SubscribedRoomList';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { Typography, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import MapSharp from '@material-ui/icons/MapSharp';
import { bindActionCreators } from 'redux';

const LobbyWrapper = styled.div`
  background-color: #f7f7f7;
`;

class Lobby extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      showRoomForm,
      showRoomList,
      setRoomFormVisibility,
      user
    } = this.props;

    const { username } = user;

    return (
      <LobbyWrapper className={this.props.className}>
        {showRoomForm ? (
          <RoomForm />
        ) : (
          <div>
            <div style={{ display: 'flex', padding: '15px' }}>
              <Avatar style={{ margin: '5px' }}>
                {username.charAt(0).toUpperCase()}
              </Avatar>
              <Button
                variant="text"
                style={{
                  margin: '5px 0',
                  padding: '0px 15px',
                  height: '40px',
                  textTransform: 'none'
                }}
              >
                <Typography variant="headline">{username}</Typography>
              </Button>
              <div style={{ marginLeft: 'auto' }}>
                <IconButton
                  onClick={() => {
                    setRoomFormVisibility(true);
                  }}
                >
                  <ChatBubbleOutline style={{ fontSize: 30 }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    showRoomList();
                  }}
                >
                  <MapSharp style={{ fontSize: 30 }} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon style={{ fontSize: 30 }} />
                </IconButton>
              </div>
            </div>
            <SubscribedRoomList />
          </div>
        )}
      </LobbyWrapper>
    );
  }
}

const mapStateToProps = state => ({
  showRoomForm: state.app.showRoomForm,
  user: state.app.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showRoomList,
      setRoomFormVisibility
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
