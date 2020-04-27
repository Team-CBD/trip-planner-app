import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../styles/map.css";



const AnyReactComponent = ({ text }) => <div style={{
  color: 'white', 
  background: '#1c75bc',
  padding: '5px 5px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;

var LatLng = {lat: 41.90, lng: 12.49};

class Gmap extends Component {
  static defaultProps = {
    center: {LatLng},
    zoom: 8
  };

  UNSAFE_componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      error => console.log(error)
    );
  }


  render() {
    return (
      <div id="map" className="col neu" style={{ height: '300px', width: '300px' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4",
            language: 'en',
            region: 'us'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={LatLng}
        >
          <AnyReactComponent
            lat={41.90}
            lng={12.49}
            text="1"
          />
        </GoogleMapReact>
        <script src='https://maps.google.com/maps/api/js?key=AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4&libraries=places&callback=initMap' async defer></script>

      </div>
      
    
    );
  }
}

export default Gmap;