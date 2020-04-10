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

var LatLng = {lat: 33.5, lng: -117.5};

class Gmap extends Component {
  static defaultProps = {
    center: {LatLng},
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
          center={LatLng}
        >
          <AnyReactComponent
            lat={43.77}
            lng={11.24}
            text="Florence"
          />
        </GoogleMapReact>
        <script src='https://maps.google.com/maps/api/js?key=AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4&libraries=places&callback=initAutocomplete' async defer></script>

      </div>
      
    
    );
  }
}

export default Gmap;