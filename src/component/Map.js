import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      defaultCenter={{ lat: 41.878114, lng: -87.629798 }}
      center={props.center}
    >
      {props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, ids) => (
            <Marker key={ids} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDF0JKyGfC759w_pBqJK3uXRswh6jni0SQ"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
