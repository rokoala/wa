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
import { setRoom, getSubscribedRooms } from '../../actions';
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
  const { subscribedRooms, onItemClick } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

SubscribedRoomList.propTypes = {
  onAddRoomClick: PropTypes.func
};

class RoomListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleJoinRoomItemClick = this.handleJoinRoomItemClick.bind(this);
    this.props.getSubscribedRooms();
  }
  handleJoinRoomItemClick(room) {
    this.props.setRoom(room);
  }
  render() {
    return (
      <SubscribedRoomList
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
      setRoom,
      getSubscribedRooms
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListContainer);
