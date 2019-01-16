import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import { transform } from 'ol/proj';

class WaMap extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    const { location } = this.props;
    if (location) {
      this.state.map
        .getView()
        .setCenter(
          transform(
            [location.longitude, location.latitude],
            'EPSG:4326',
            'EPSG:3857'
          )
        );

      this.state.map.getView().setZoom(14);
    }
  }
  componentDidMount() {
    const map = new Map({
      target: this.refs.mapContainer,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 4
      })
    });

    this.setState({
      map
    });
  }
  render() {
    return <div ref="mapContainer" />;
  }
}

const mapStateToProps = state => ({
  location: state.app.location
});

export default connect(mapStateToProps)(WaMap);
