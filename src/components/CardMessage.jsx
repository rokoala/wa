import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CardMessage extends Component {
  constructor(props) {
    super(props);

    const cardStyleDefault = {
      width: '50%',
      margin: 5
    };

    this.cardStyle = Object.assign(
      {},
      cardStyleDefault,
      props.fromMe ? { float: 'right' } : { float: 'left' }
    );
  }
  render() {
    return (
      <Card style={this.cardStyle}>
        <CardContent>
          <Typography
            style={{ color: 'lightgreen', fontWeight: 'bold' }}
            gutterBottom
          >
            {this.props.message.author}
          </Typography>
          <Typography variant="body1">{this.props.message.text}</Typography>
        </CardContent>
      </Card>
    );
  }
}
