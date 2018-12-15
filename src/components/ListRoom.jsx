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
import { lightGreen } from '@material-ui/core/colors';

const StyledListItem = withStyles({
  primary: {
    'font-weight': 500
  }
})(ListItemText);

const ListRoom = props => {
  return (
    <React.Fragment>
      <List style={{ padding: 0 }}>
        <ListItem
          style={{ backgroundColor: '' }}
          onClick={props.onAddRoomClick}
          button
        >
          <ListItemIcon>
            <ChatBubbleOutline fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Criar Chat" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar> */}
          <StyledListItem primary="Pizzaria Rei Jorge" secondary="Olá!" />
        </ListItem>
        <ListItem button>
          <StyledListItem primary="Shopping Ipiranga" secondary="Ok!" />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

ListRoom.propTypes = {
  onAddRoomClick: PropTypes.func
};

export default ListRoom;
