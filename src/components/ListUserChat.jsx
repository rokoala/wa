import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserIcon from '@material-ui/icons/PermIdentity';
import CloseIcon from '@material-ui/icons/Close';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

export default class ListUserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onCloseClick = this.onCloseClick.bind(this);
  }
  onCloseClick(evt) {
    this.props.onClose(evt);
  }
  componentDidMount() {
    console.log('did mount');
    this.props.socketClient.onlineUsers().then(users => {
      console.log(users);
      this.setState({ users });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={this.onCloseClick}
          />
          <Typography variant="h4">Users Online</Typography>
        </Header>
        <List>
          {this.state.users.map(user => (
            <ListItem key={user.id}>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText inset primary={user.username} />
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}
