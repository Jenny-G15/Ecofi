import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Crear un componente funcional para el mapa
const Mapa = () => {
  // Coordenadas iniciales del mapa y nivel de zoom
  const position = [9.877940, -84.076095]; 
  const zoom = 15; // Ajusta el nivel de zoom

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ border: 'solid 2px #ffffff', padding: '5px', height: "200px", width: "100%"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default Mapa;