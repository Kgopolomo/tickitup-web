import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
const events = [
    {
      id: 1,
      lat: 51.5074,
      lng: -0.1278,
      title: 'London Marathon',
      description: 'The London Marathon is a long-distance running event held in London, United Kingdom.'
    },
    {
      id: 2,
      lat: 40.7128,
      lng: -74.006,
      title: 'New York City Marathon',
      description: 'The New York City Marathon is an annual marathon that courses through the five boroughs of New York City.'
    },
    {
      id: 3,
      lat: 48.8566,
      lng: 2.3522,
      title: 'Paris Marathon',
      description: 'The Paris Marathon is a major 42.195 km road race that takes place annually in April in Paris, France.'
    },
    {
      id: 4,
      lat: -22.9068,
      lng: -43.1729,
      title: 'Rio de Janeiro Marathon',
      description: 'The Rio de Janeiro Marathon is an annual marathon race in Rio de Janeiro, Brazil.'
    }
  ];

const EventMap = () => {
  return (
<div style={{ height: '400px', margin:'10px',borderRadius: '0.5rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'  }}>
      <MapContainer center={[51.505, -0.09]} zoom={0} style={{ height: '100%', width: '100%' }}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

  {events.map((event) => (
    <Marker key={event.id} position={[event.lat, event.lng]}>
      <Popup>
        <div>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      </Popup>
    </Marker>
  ))}
</MapContainer>
</div>
  );
};

export default EventMap;