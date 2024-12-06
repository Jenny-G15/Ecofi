import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import PinReciclaje from "../IMG/PinReciclaje.png"; // Imagen personalizada
import { getRecofis } from "../services/recofiServices"; // Importa el servicio
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
          console.log(`Recofi: ${recofi.Nombre_Recofi}, Latitud: ${recofi.Latitud}, Longitud: ${recofi.Longitud}`);
          return {
            geocode: [recofi.Latitud, recofi.Longitud],
            popUp: `${recofi.Nombre_Recofi}. Horario: ${recofi.Horario}. Material: ${recofi.materialRecofi.Tipo_Material}`,
          };
        });
        // const formattedMarkers = recofis.map((recofi) => ({
        //   geocode: [recofi.Latitud, recofi.Longitud],
        //   popUp: `${recofi.Nombre_Recofi}. Horario: ${recofi.Horario}. Material: ${recofi.materialRecofi.Tipo_Material}`,
        // }));
        console.log("Marcadores formateados:", formattedMarkers); // Verifica los marcadores
        setMarkers(formattedMarkers);
      } catch (error) {
        console.error("Error al obtener los marcadores:", error);
      }
    };
    
    // const fetchMarkers = async () => {
    //   try {
    //     const recofis = await getRecofis(); // Llama al servicio
    //     const formattedMarkers = recofis.map((recofi) => ({
    //       geocode: [recofi.Latitud, recofi.Longitud],
    //       popUp: `${recofi.Nombre_Recofi}. Horario: ${recofi.Horario}. Material: ${recofi.materialRecofi.Tipo_Material}`, // Construye el popUp
    //     }));
    //     setMarkers(formattedMarkers); // Actualiza el estado con los datos de los recofis
    //   } catch (error) {
    //     console.error("Error al obtener los marcadores:", error);
    //   }
    // };

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
    <MapContainer center={[9.97691, -84.8379]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Conjunto de Marcadores */}
      <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

















