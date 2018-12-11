import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AddIconLocation from '@material-ui/icons/AddLocation';

const ListRoom = props => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <AddIconLocation />
        </ListItemIcon>
        <ListItemText onClick={props.onAddRoomClick} primary="Criar Sala" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Room #1" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Room #2" />
      </ListItem>
    </List>
  );
};

ListRoom.propTypes = {
  onAddRoomClick: PropTypes.func
};

export default ListRoom;
