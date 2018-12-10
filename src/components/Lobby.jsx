import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AddIconLocation from '@material-ui/icons/AddLocation';
import RoomForm from './RoomForm';
import { toogleRoomForm } from '../actions';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.onAddRoomClick = this.onAddRoomClick.bind(this);
  }
  onAddRoomClick() {
    this.props.toogleRoomForm();
  }
  render() {
    return (
      <div className={this.props.className}>
        {this.props.showRoomForm ? (
          <RoomForm />
        ) : (
          <List>
            <ListItem button>
              <ListItemText primary="Room #1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Room #2" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIconLocation />
              </ListItemIcon>
              <ListItemText
                onClick={this.onAddRoomClick}
                primary="Criar Sala"
              />
            </ListItem>
          </List>
        )}
      </div>
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
)(Lobby);
