import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import PinReciclaje from "../IMG/PinReciclaje.png"; 
import { getRecofis } from "../services/recofiServices"; 
import "../styles/Mapa.css";




export default function MapaRecofi() {
  const [markers, setMarkers] = useState([]); // Estado para almacenar los marcadores

  // Llamada al servicio para obtener los recofis
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const recofis = await getRecofis(); // Llama al servicio
        console.log("Recofis obtenidos:", recofis); // Verifica los datos recibidos

        const formattedMarkers = recofis.map((recofi) => {
          return {
            geocode: [recofi.Latitud, recofi.Longitud],
            popUp: `
              <div class="popup-container">
                <h3>${recofi.Nombre_Recofi}</h3>
                <p><strong>Horario:</strong> ${recofi.HorarioApertura} - ${recofi.HorarioCierre}</p>
                <p><strong>Material:</strong> ${recofi.materialRecofi.Tipo_Material}</p>
              </div>
            `,
          };
        });

        console.log("Marcadores formateados:", formattedMarkers); // Verifica los marcadores
        setMarkers(formattedMarkers);
      } catch (error) {
        console.error("Error al obtener los marcadores:", error);
      }
    };

    fetchMarkers(); // Ejecuta la función al montar el componente
  }, []);

  // Ícono personalizado para los marcadores
  const customIcon = new Icon({
    iconUrl: PinReciclaje, // Imagen personalizada
    iconSize: [38, 38], // Tamaño del ícono
  });

  // Ícono personalizado para los clusters
  const createClusterCustomIcon = (cluster) =>
    new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true), // Tamaño del cluster
    });

  return (
    <div className="map-container">
      <h1 className="map-title">Centros de Recolección</h1>
      <p className="map-description">
        Este mapa muestra la ubicación de los centros de recolección más cercanos a tu comunidad. 
        Haz clic en los marcadores para ver información detallada como el horario y los materiales aceptados.
      </p>
      <MapContainer
        center={[9.97691, -84.8379]}
        zoom={12}
        style={{
          border: "solid 2px #ffffff",
          padding: "5px",
          height: "400px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Conjunto de Marcadores */}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                {/* Aquí se usa dangerouslySetInnerHTML para interpretar el HTML */}
                <div dangerouslySetInnerHTML={{ __html: marker.popUp }} />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}














