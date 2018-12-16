import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Divider from '@material-ui/core/Divider';

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

const ListRoom = props => {
  const { rooms } = props;
  return (
    <React.Fragment>
      <List style={{ padding: 0 }}>
        <ListItem
          style={{ backgroundColor: 'white' }}
          onClick={props.onAddRoomItemClick}
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

ListRoom.propTypes = {
  onAddRoomClick: PropTypes.func
};

export default ListRoom;
