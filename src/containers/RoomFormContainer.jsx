import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toogleRoomForm, addRoom } from '../actions';
import GeoLocation from '../resources/Geolocation';
import RoomForm from '../components/RoomForm';

class RoomFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.handleAddRoomClick = this.handleAddRoomClick.bind(this);
  }
  handleChangeText(event) {
    this.setState({ name: event.target.value });
  }
  onAddBtnClick(event) {
    GeoLocation.getLocation().then(pos => {
      this.onAddRoomClick({
        name: this.state.name,
        location: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }
      });
    });
  }
  handleAddRoomClick(room) {
    this.props.addRoom(room);
    this.props.toogleRoomForm();
  }
  render() {
    return (
      <RoomForm
        handleChangeText={this.handleChangeText}
        onAddBtnClick={this.onAddBtnClick}
        name={this.state.name}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toogleRoomForm, addRoom }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(RoomFormContainer);
