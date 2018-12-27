import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RoomForm from '../components/RoomForm';
import ListRoom from '../components/ListRoom';
import {
  toogleRoomForm,
  addRoom,
  setRoom,
  getRoomsByLocation
} from '../actions';
import styled from 'styled-components';

const Lobby = styled.div`
  background-color: #f7f7f7;
`;

class LobbyContainer extends Component {
  constructor(props) {
    super(props);
    this.handleItemRoomClick = this.handleItemRoomClick.bind(this);
    this.handleAddRoomClick = this.handleAddRoomClick.bind(this);
    this.handleItemJoinRoom = this.handleItemJoinRoom.bind(this);
  }
  componentWillMount() {
    this.props.getRoomsByLocation();
  }
  componentWillUpdate() {
    this.props.getRoomsByLocation();
  }
  handleItemRoomClick() {
    this.props.toogleRoomForm();
  }
  handleAddRoomClick(room) {
    this.props.addRoom(room);
    this.props.toogleRoomForm();
  }
  handleItemJoinRoom(room) {
    this.props.setRoom(room);
  }
  render() {
    const { showRoomForm, rooms } = this.props;
    return (
      <Lobby className={this.props.className}>
        {showRoomForm ? (
          <RoomForm
            onExitClick={this.handleItemRoomClick}
            onAddRoomClick={this.handleAddRoomClick}
          />
        ) : (
          <ListRoom
            rooms={rooms}
            onAddRoomItemClick={this.handleItemRoomClick}
            onItemClick={this.handleItemJoinRoom}
          />
        )}
      </Lobby>
    );
  }
}

const mapStateToProps = state => ({
  showRoomForm: state.app.showRoomForm,
  rooms: state.rooms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toogleRoomForm, addRoom, setRoom, getRoomsByLocation },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);
