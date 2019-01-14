import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  setRoomFormVisibility,
  setRoom,
  getSubscribedRooms,
  showRoomList
} from '../../actions';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import MapSharp from '@material-ui/icons/MapSharp';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import moment from 'moment';

const StyledListItem = withStyles({
  primary: {
    'font-weight': 500
  },
  secondary: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis'
  }
})(ListItemText);

const ListItemChat = withStyles({
  primary: {
    'font-weight': 300,
    'letter-spacing': '1px'
  }
})(ListItemText);

const createListItem = ({ name, lastMessages }) =>
  lastMessages.length > 0 ? (
    <React.Fragment>
      <StyledListItem
        primary={name}
        secondary={lastMessages[lastMessages.length - 1].text}
      />
      <Typography style={{ color: 'gray' }}>
        {moment(lastMessages[lastMessages.length - 1].date).format('HH:mm')}
      </Typography>
    </React.Fragment>
  ) : (
    <StyledListItem primary={name} />
  );

const SubscribedRoomList = props => {
  const {
    subscribedRooms,
    onItemClick,
    onAddRoomItemClick,
    showRoomList
  } = props;

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
        {subscribedRooms.map(room => {
          const itemTextDate = createListItem(room);

          return (
            <ListItem
              onClick={() => {
                onItemClick(room);
              }}
              key={room.id}
              button
            >
              {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar> */}
              {itemTextDate}
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Button
        onClick={() => {
          showRoomList();
        }}
      >
        <MapSharp style={{ fontSize: 50 }} />
      </Button>
    </React.Fragment>
  );
};

SubscribedRoomList.propTypes = {
  onAddRoomClick: PropTypes.func
};

class RoomListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddRoomItemClick = this.handleAddRoomItemClick.bind(this);
    this.handleJoinRoomItemClick = this.handleJoinRoomItemClick.bind(this);
    this.props.getSubscribedRooms();
  }
  handleAddRoomItemClick() {
    this.props.setRoomFormVisibility(true);
  }
  handleJoinRoomItemClick(room) {
    this.props.setRoom(room);
  }
  render() {
    return (
      <SubscribedRoomList
        onAddRoomItemClick={this.handleAddRoomItemClick}
        onItemClick={this.handleJoinRoomItemClick}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  subscribedRooms: state.app.subscribedRooms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setRoomFormVisibility,
      setRoom,
      getSubscribedRooms,
      showRoomList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListContainer);
