import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toogleRoomForm } from '../actions';

class RoomForm extends Component {
  constructor(props) {
    super(props);

    this.onExitClick = this.onExitClick.bind(this);
  }
  onExitClick() {
    this.props.toogleRoomForm();
  }
  render() {
    return (
      <div>
        Criar Chat
        <button onClick={this.onExitClick}>Voltar</button>
      </div>
    );
  }
}

const mapDispathToProps = dispatch =>
  bindActionCreators({ toogleRoomForm }, dispatch);

export default connect(
  null,
  mapDispathToProps
)(RoomForm);
