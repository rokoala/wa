import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  background-color: #6cc7ae;
  padding: 9px 30px;
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
        <Typography style={{ color: 'white', fontWeight: 300 }} variant="h5">
          Usuários Online
        </Typography>
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

class ListUserChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.socketClient.onlineUsers().then(users => {
      this.setState({ users });
    });
  }
  render() {
    return (
      <ListUserChat users={this.state.users} onClose={this.props.onClose} />
    );
  }
}

const mapStateToProps = state => ({
  socketClient: state.app.socketClient
});

export default connect(mapStateToProps)(ListUserChatContainer);
