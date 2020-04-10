import React, { Component } from 'react';
import GmapReact from 'google-map-react';
import "../styles/map.css";


const AnyReactComponent = ({ text }) => <div>{text}</div>;



class Gmap extends Component {
  static defaultProps = {
  };

  componentWillMount() {
    var map, infoWindow;
      function initMap() {
        map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new window.google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
  }
    

  



  render() {
    return (
      <div id="map" className="map neu" style={{ height: '94%', width: '94%' }}>

        <GmapReact
          bootstrapURLKeys={{
            key: "AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4",
            language: 'en',
            region: 'us'
          }}
          defaultCenter={window.pos}
          defaultZoom={10}
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
        </GmapReact>
        <script src='https://maps.google.com/maps/api/js?key=AIzaSyDOpL4ut22yVDXSPOcY6AiqvoHuX_Auah4&libraries=places&callback=initMap' async defer></script>

      </div>
      
    
    );
  }
}

export default Gmap;

