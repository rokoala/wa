import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

class CardMessage extends Component {
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
    const { from, text } = this.props.message;
    return (
      <Card style={this.cardStyle}>
        <CardContent style={{ padding: 12 }}>
          <Typography gutterBottom>
            <b>{from}</b>
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CardMessage;
