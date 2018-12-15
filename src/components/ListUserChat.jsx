import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '@material-ui/icons/AccountCircleTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

const ListUserChat = props => {
  return (
    <React.Fragment>
      <Header>
        <Button onClick={props.onClose}>
          <CloseIcon />
        </Button>
        <Typography variant="h4">Usuários Online</Typography>
      </Header>
      <List>
        {props.users.map(user => (
          <ListItem key={user.id}>
            <ListItemIcon>
              <UserIcon style={{ fontSize: 50 }} />
            </ListItemIcon>
            <ListItemText inset primary={user.username} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

ListUserChat.propTypes = {
  onClose: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string
  })
};

export default ListUserChat;
