import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../styles/map.css";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 33.5,
      lng: -117.5
    },
    zoom: 8
  };
  
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
      },
      error => console.log(error)
    );
  }


  render() {
    return (
        <div id="map" className="shadow-sm" style={{ height: '94%', width: '94%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // eslint-disable-next-line
          center={ this.props.lat, this.props.lng }
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Gmap;

