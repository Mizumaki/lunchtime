import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: Number(props.location.latitude), lng: Number(props.location.longitude) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: Number(props.location.latitude), lng: Number(props.location.longitude) }} />}
  </GoogleMap>
))

export default MyMapComponent;