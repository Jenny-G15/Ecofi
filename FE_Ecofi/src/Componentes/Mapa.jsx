// src/components/Map.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import leaflet from 'leaflet';

// Estilos para el mapa
import 'leaflet/dist/leaflet.css';

// Componente para agregar puntos interactivos
const AddMarker = ({ markers, setMarkers }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setMarkers([...markers, { lat, lng }]);
    },
  });
  return null;
};

const Map = () => {
  const [markers, setMarkers] = useState([]); // Estado para los puntos del mapa

  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Componente para agregar marcadores */}
        <AddMarker markers={markers} setMarkers={setMarkers} />
        
        {/* Mostrar los puntos en el mapa */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              <strong>Punto {index + 1}</strong>
              <br />
              Lat: {marker.lat}, Lng: {marker.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
