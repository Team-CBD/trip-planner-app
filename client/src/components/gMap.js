import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


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
      <div className="container">
        <div className="row">
        <div id="map" className="col-8 offset-2" style={{ height: '50vh', width: '100%' }}>
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
        </div>
      </div>
      
    );
  }
}
 
export default Gmap;

