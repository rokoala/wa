import { connect } from 'react-redux';
import SocketApi from '../resources/SocketApi';
import React, { Component } from 'react';

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.socketApi = new SocketApi(props.socketClient);
  }
  componentWillMount() {
    this.socketApi.regiterMessageListener();
  }
  componentWillUnmount() {
    this.socketApi.unregisterMessageListener();
  }
  render() {
    return (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  socketClient: state.app.socketClient
});

export default connect(mapStateToProps)(AppWrapper);
