import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRoomList } from '../../actions';
import RoomForm from './RoomForm';
import SubscribedRoomList from './SubscribedRoomList';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { Typography, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
    const { showRoomForm, user } = this.props;
    const { username } = user;
    return (
      <LobbyWrapper className={this.props.className}>
        {showRoomForm ? (
          <RoomForm />
        ) : (
          <div>
            <div style={{ display: 'flex', padding: '15px' }}>
              <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
              <Button
                variant="text"
                style={{
                  padding: '0px 15px',
                  height: '40px',
                  textTransform: 'none'
                }}
              >
                <Typography variant="headline">{username}</Typography>
              </Button>
              <div style={{ marginLeft: 'auto' }}>
                <Button
                  onClick={() => {
                    this.props.showRoomList();
                  }}
                >
                  <MapSharp style={{ fontSize: 30 }} />
                </Button>
                <IconButton>
                  <MoreVertIcon />
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
      showRoomList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
