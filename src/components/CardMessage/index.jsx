import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardMessage = props => {
  const { username, text } = props.message;
  return (
    <Card style={props.cardStyle}>
      <CardContent style={{ padding: 12 }}>
        <Typography gutterBottom>
          <b>{username}</b>
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

class CardMessageContainer extends Component {
  constructor(props) {
    super(props);

    this.cardStyle = {
      ...{
        minWidth: 5,
        margin: 2
      },
      ...(props.fromMe
        ? { alignSelf: 'flex-end', backgroundColor: '#dcffd5' }
        : { alignSelf: 'flex-start' })
    };
  }
  render() {
    return <CardMessage cardStyle={this.cardStyle} {...this.props} />;
  }
}

export default CardMessageContainer;
