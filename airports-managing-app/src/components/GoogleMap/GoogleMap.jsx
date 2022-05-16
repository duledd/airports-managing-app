import React from 'react'
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '440px',
  height: '440px'
};

const center = {
  lat: -3.397,
  lng: 120.644
};

function RenderMap() {
  return (
    <LoadScript
    useJsApiLoader="API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(RenderMap)