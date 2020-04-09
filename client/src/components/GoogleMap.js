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
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      error => console.log(error)
    );
  }


  render() {
    return (
      <div id="map" className="neu" style={{ height: '94%', width: '94%' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4",
            language: 'en',
            region: 'us'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={
            // eslint-disable-next-line
            this.props.lat,
            this.props.lng
          }
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
        <script src='https://maps.google.com/maps/api/js?key=AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4&libraries=places&callback=initAutocomplete' async defer></script>

      </div>
      
    
    );
  }
}

export default Gmap;

