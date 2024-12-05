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
        const formattedMarkers = recofis.map((recofi) => ({
          geocode: [recofi.Latitud, recofi.Longitud],
          popUp: `${recofi.Nombre_Recofi}. Horario: ${recofi.Horario}. Material: ${recofi.Material.Tipo_Material}`, // Construye el popUp
        }));
        setMarkers(formattedMarkers); // Actualiza el estado con los datos de los recofis
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




// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { Icon, divIcon, point } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import PinReciclaje from "../IMG/PinReciclaje.png"; // Importa directamente la imagen
// import "../styles/Mapa.css";




// export default function MapaRecofi() {

//   const markers = [
//     {
//       geocode: [9.97661345866912, -84.83626186386924],
//       popUp: "Municipalidad de Puntarenas. Horario: 9am a 2pm. Material: Plásticos",
//     },
//     {
//       geocode: [9.978589311421514, -84.82818412319743],
//       popUp: "Las Playitas. Horario: Sábados 8am a 12md. Material: Vidrio",
//     },
//     {
//       geocode: [9.980973975090633, -84.80189214401366],
//       popUp: "Plantel Municipal. Horario: Lunes a Viernes, 1pm a 5pm. Reciclan: Cartón y Papel",
//     },
//     {
//       geocode: [9.980356074395845, -84.73776968697072],
//       popUp: "Parroquia Sagrado Corazón. Horario: Jueves: 2pm a 8pm. Recicla: Aluminio",
//     },
//   ];

//   // Define el ícono personalizado

//   const customIcon = new Icon({
//     iconUrl: PinReciclaje, // Usa la imagen importada
//     iconSize: [38, 38], // Tamaño del ícono
//   });

//   // Define el ícono personalizado para los clusters
//   const createClusterCustomIcon = (cluster) =>
//     new divIcon({
//       html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//       className: "custom-marker-cluster",
//       iconSize: point(33, 33, true), // Tamaño del cluster
//     });

//   return (
//     <MapContainer center={[9.97691, -84.8379]} zoom={12}>
//       <TileLayer
//         attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* Marker Cluster Group */}
//       <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
//         {markers.map((marker, index) => (
//           <Marker key={index} position={marker.geocode} icon={customIcon}>
//             <Popup>{marker.popUp}</Popup>
//           </Marker>
//         ))}
//       </MarkerClusterGroup>
//     </MapContainer>
//   );
// }
















