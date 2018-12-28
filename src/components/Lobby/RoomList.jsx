import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { toogleRoomForm, setRoom, getRoomsByLocation } from '../../actions';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Divider from '@material-ui/core/Divider';
import { bindActionCreators } from 'redux';

const StyledListItem = withStyles({
  primary: {
    'font-weight': 500
  }
})(ListItemText);

const ListItemChat = withStyles({
  primary: {
    'font-weight': 300,
    'letter-spacing': '1px'
  }
})(ListItemText);

const RoomList = props => {
  const { rooms, onItemClick, onAddRoomItemClick } = props;

  return (
    <React.Fragment>
      <List style={{ padding: 0 }}>
        <ListItem
          style={{ backgroundColor: 'white' }}
          onClick={onAddRoomItemClick}
          button
        >
          <ListItemIcon>
            <ChatBubbleOutline fontSize="large" />
          </ListItemIcon>
          <ListItemChat primary="Criar Chat" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {rooms.map(room => {
          return (
            <ListItem key={room.id} button>
              {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar> */}
              <StyledListItem
                onClick={() => {
                  onItemClick(room);
                }}
                primary={room.name}
                secondary={room.lastMessage}
              />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

RoomList.propTypes = {
  onAddRoomClick: PropTypes.func
};

class RoomListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddRoomItemClick = this.handleAddRoomItemClick.bind(this);
    this.handleJoinRoomItemClick = this.handleJoinRoomItemClick.bind(this);
  }
  componentWillMount() {
    this.props.getRoomsByLocation();
  }
  handleAddRoomItemClick() {
    this.props.toogleRoomForm();
  }
  handleJoinRoomItemClick(room) {
    this.props.setRoom(room);
  }
  render() {
    return (
      <RoomList
        onAddRoomItemClick={this.handleAddRoomItemClick}
        onItemClick={this.handleJoinRoomItemClick}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleRoomForm, setRoom, getRoomsByLocation }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListContainer);
