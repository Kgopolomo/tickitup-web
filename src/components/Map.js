import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = (props) => {
    return (
        
        <MapContainer center={[51.505, -0.09]} zoom={0} style={{ height: '100%', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505,  -0.09]}>
        <Popup>
          <div>
            <h3>{props.name}</h3>
          </div>
        </Popup>
      </Marker>
  </MapContainer>

    );
};


export default Map;