import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  



  render() {
    return (
      <div className="container">
        <div className="row">
        <div id="map" className="col-8 offset-2" style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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

