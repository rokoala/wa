import React, { PureComponent } from 'react';
import { getAndSetRoom, getRoomsByLocation } from '../../actions';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  CardActions
} from '@material-ui/core';
import LocationOnRounded from '@material-ui/icons/LocationOnRounded';
import FaceRounded from '@material-ui/icons/FaceRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.props.getRoomsByLocation();
  }
  handleClickSubscribe() {}
  render() {
    const { rooms } = this.props;

    return rooms ? (
      rooms.map(room => (
        <Card
          style={{
            margin: 10,
            flexBasis: 318
          }}
          key={room.id}
        >
          <CardHeader
            style={{ borderBottom: '1px solid lightgray' }}
            // avatar={<Avatar aria-label="Recipe">J</Avatar>}
            // title={room.name}
            subheader={
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    margin: '0 5px',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center'
                  }}
                >
                  <LocationOnRounded
                    style={{ color: '#6d5ce6', fontSize: 22 }}
                  />
                  <Typography
                    variant="caption"
                    style={{ fontWeight: 'bolder' }}
                    component="b"
                  >
                    500m
                  </Typography>
                </div>
                <div
                  style={{
                    margin: '0 5px',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center'
                  }}
                >
                  <FaceRounded style={{ color: '#d2b30e', fontSize: 22 }} />
                  <Typography
                    variant="caption"
                    style={{ fontWeight: 'bolder' }}
                    component="b"
                  >
                    4/39
                  </Typography>
                </div>
              </div>
            }
          />
          <CardActionArea
            onClick={() => {
              this.props.getAndSetRoom(room);
            }}
          >
            <CardMedia
              style={{ height: 305, filter: 'opacity(.85)' }}
              image={
                'http://localhost:8000/images/rooms/shopping-patio-paulista.jpg'
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {room.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            disableActionSpacing
          >
            <IconButton
              // onClick={this.handleClickSubscribe}
              aria-label="Add to favorites"
            >
              <FavoriteIcon style={{ color: '#ff3838', fontSize: 35 }} />
            </IconButton>
          </CardActions>
        </Card>
      ))
    ) : (
      <div />
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAndSetRoom,
      getRoomsByLocation
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
