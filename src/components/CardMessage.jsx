import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CardMessage extends Component {
  constructor(props) {
    super(props);

    const cardStyleDefault = {
      minWidth: 5,
      margin: 2
    };

    this.cardStyle = Object.assign(
      {},
      cardStyleDefault,
      props.fromMe ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }
    );
  }
  render() {
    return (
      <Card style={this.cardStyle}>
        <CardContent style={{ padding: 12 }}>
          <Typography style={{ fontWeight: 'bold' }} gutterBottom>
            {this.props.message.author}
          </Typography>
          <Typography variant="body1">{this.props.message.text}</Typography>
        </CardContent>
      </Card>
    );
  }
}
