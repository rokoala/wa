import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const CardMessage = props => {
  const { username, text, date } = props.message;
  return (
    <div style={props.messageStyle}>
      <Card style={props.cardStyle}>
        <CardContent style={{ padding: 12 }}>
          <Typography gutterBottom>
            <b>{username}</b>
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
      <Typography style={{ color: 'gray', float: 'right' }}>
        {moment(date).format('HH:mm')}
      </Typography>
    </div>
  );
};

class CardMessageContainer extends Component {
  constructor(props) {
    super(props);

    this.messageStyle = {
      ...{
        minWidth: 5,
        margin: 8
      },
      ...(props.fromMe
        ? { alignSelf: 'flex-end' }
        : { alignSelf: 'flex-start' })
    };

    this.cardStyle = props.fromMe ? { backgroundColor: '#d9ffd9' } : {};
  }
  render() {
    return (
      <CardMessage
        messageStyle={this.messageStyle}
        cardStyle={this.cardStyle}
        {...this.props}
      />
    );
  }
}

export default CardMessageContainer;
