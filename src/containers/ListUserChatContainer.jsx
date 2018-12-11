import React, { Component } from 'react';
import ListUserChat from '../components/ListUserChat';
import { connect } from 'react-redux';

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
