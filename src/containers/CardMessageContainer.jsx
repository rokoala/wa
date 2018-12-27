import CardMessage from '../components/CardMessage';

class CardMessageContainer extends Component {
  constructor(props) {
    super(props);

    this.cardStyle = Object.assign(
      {},
      {
        minWidth: 5,
        margin: 2
      },
      props.fromMe ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }
    );
  }
  render() {
    return <CardMessage cardStyle={this.cardStyle} {...this.props} />;
  }
}

export default CardMessageContainer;
