import React, { Component } from 'react';
import UserIcon from '@material-ui/icons/AccountCircleTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toogleRoomInfo } from '../actions';
import {
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
  margin: 0 20px;
  z-index: 1;
  color: lightgray;
  border-bottom: 1px solid;
`;

class ListUserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onCloseClick = this.onCloseClick.bind(this);
  }
  componentDidMount() {
    this.props.socketClient.onlineUsers().then(users => {
      this.setState({ users });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={this.props.onClose}
          />
          <Typography variant="h4">Users Online</Typography>
        </Header>
        <List>
          {this.state.users.map(user => (
            <ListItem key={user.id}>
              <ListItemIcon>
                <UserIcon style={{ fontSize: 60 }} />
              </ListItemIcon>
              <ListItemText inset primary={user.username} />
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  socketClient: state.app.socketClient
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleRoomInfo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUserChat);
