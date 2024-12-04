import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import '../styles/Mapa.css'




export default function MapaRecofi(){

    const Markers= [
      {
        geocode: [9.97661345866912, -84.83626186386924],
        popUp: "Municipalidad de Puntarenas. Horario: 9am a 2pm. Material: Plásticos"
      },
      {
        geocode: [9.978589311421514, -84.82818412319743],
        popUp: "Las Playitas. Horario: Sabados 8am a 12md. Material: Vidrio"
      },
      {
        geocode: [9.980973975090633, -84.80189214401366],
        popUp: "Plantel Municipal. Horario:Lunes a Viernes, 1pm a 5pm. Reciclan: Cartón y Papel "
      },
      {
        geocode: [9.980356074395845, -84.73776968697072],
        popUp: "Parroquia Sagardo Corazón. Horario: Jueves: 2pm a 8pm. Recicla: Aluminio"
      }
    ]
    

  return (

      <MapContainer center={[9.97691, -84.8379]} zoom={12}>
        <TileLayer
        attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

     
          {/* {markers.map(marker => {
            <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>


          })
        }
        
     
      */}


      </MapContainer>


  );
}

