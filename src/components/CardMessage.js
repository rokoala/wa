import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardMessage = props => (
  <Card style={this.props.cardStyle}>
    <CardContent style={{ padding: 12 }}>
      <Typography gutterBottom>
        <b>{props.from}</b>
      </Typography>
      <Typography variant="body1">{props.text}</Typography>
    </CardContent>
  </Card>
);

export default CardMessage;
