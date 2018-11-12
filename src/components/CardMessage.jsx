import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class CardMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ margin: 3 }}>
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
