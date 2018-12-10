import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AddIconLocation from '@material-ui/icons/AddLocation';

export default class Lobby extends Component {
  render() {
    return (
      <List className={this.props.className}>
        <ListItem button>
          <ListItemText primary="Room #1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Room #2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddIconLocation />
          </ListItemIcon>
          <ListItemText primary="Criar sala" />
        </ListItem>
      </List>
    );
  }
}
