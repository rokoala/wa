import React, { Component } from 'react';
import CardList from './CardList';
import { Typography } from '@material-ui/core';

class RoomCardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: '#fdfdfd'
        }}
      >
        <header>
          <Typography variant="h6" style={{ margin: 25 }}>
            Raio - 500m
          </Typography>
        </header>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
        >
          <CardList />
        </div>
      </div>
    );
  }
}

export default RoomCardList;
