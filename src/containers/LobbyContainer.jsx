import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RoomForm from '../components/RoomForm';
import ListRoom from '../components/ListRoom';
import { toogleRoomForm } from '../actions';

class LobbyContainer extends Component {
  constructor(props) {
    super(props);
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }
  handleRoomClick() {
    this.props.toogleRoomForm();
  }
  render() {
    const showRoomForm = this.props.showRoomForm;
    return showRoomForm ? (
      <RoomForm onExitClick={this.handleRoomClick} />
    ) : (
      <ListRoom onAddRoomClick={this.handleRoomClick} />
    );
  }
}

const mapStateToProps = state => ({
  showRoomForm: state.app.showRoomForm
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleRoomForm }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
