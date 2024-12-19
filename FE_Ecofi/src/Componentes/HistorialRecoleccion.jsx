import React, { useEffect, useState } from 'react';
import { getHrecoleccion } from '../services/HrecoleccionServices';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Historialrecolecciones = () => {
  const [estadisticas, setEstadisticas] = useState({
    recofiIntercambios: [],
    materialesIntercambios: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEstadisticas = async () => {
      try {
        const data = await getHrecoleccion();
        setEstadisticas({
          recofiIntercambios: data.recofiIntercambios,
          materialesIntercambios: data.materialesIntercambios
        });
      } catch (error) {
        setError('Error al cargar las estadísticas');
        console.error('Error al obtener estadísticas en el componente:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEstadisticas();
  }, []);

  // Datos para la gráfica de centros de recolección
  const dataRecofi = {
    labels: estadisticas.recofiIntercambios.map(recofi => recofi.nombre),
    datasets: [
      {
        label: 'Intercambios por Centro de Recolección',
        data: estadisticas.recofiIntercambios.map(recofi => recofi.totalIntercambios),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  // Datos para la gráfica de materiales
  const dataMateriales = {
    labels: estadisticas.materialesIntercambios.map(material => material.nombre),
    datasets: [
      {
        label: 'Intercambios por Material',
        data: estadisticas.materialesIntercambios.map(material => material.totalIntercambios),
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
      }
    ]
  };

  return (
    <div>
      <h2>Estadísticas</h2>
      {loading ? (
        <p>Cargando estadísticas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <h3>Centros de Recolección</h3>
            <Bar data={dataRecofi} options={{ responsive: true }} />

            <h3>Materiales</h3>
            <Bar data={dataMateriales} options={{ responsive: true }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Historialrecolecciones;








// import React, { useEffect, useState } from 'react';
// import { getHrecoleccion } from '../services/HrecoleccionServices';
// import { Bar } from 'react-chartjs-2'; // Importa el componente de gráfica de barras
// import 'chart.js/auto'; // Necesario para que funcione Chart.js


// const Historialrecolecciones = () => {
//   const [estadisticas, setEstadisticas] = useState({
//     recofiTop: null,
//     materialTop: null,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEstadisticas = async () => {
//       try {
//         const data = await getHrecoleccion();
//         setEstadisticas({
//           recofiTop: data.recofiTop,
//           materialTop: data.materialTop,
//         });
//       } catch (error) {
//         setError('Error al cargar las estadísticas');
//         console.error('Error al obtener estadísticas en el componente:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEstadisticas();
//   }, []);

//   // Configuración de datos para las gráficas
//   const dataRecofi = {
//     labels: estadisticas.recofiTop ? [estadisticas.recofiTop.nombre] : [],
//     datasets: [
//       {
//         label: 'Intercambios por Centro de Recolección',
//         data: estadisticas.recofiTop ? [estadisticas.recofiTop.totalIntercambios] : [],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };

//   const dataMaterial = {
//     labels: estadisticas.materialTop ? [estadisticas.materialTop.nombre] : [],
//     datasets: [
//       {
//         label: 'Intercambios por Material',
//         data: estadisticas.materialTop ? [estadisticas.materialTop.totalIntercambios] : [],
//         backgroundColor: 'rgba(153, 102, 255, 0.6)',
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Estadísticas</h2>
//       {loading ? (
//         <p>Cargando estadísticas...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div>
//           <p>Centro de recolección más activo: {estadisticas.recofiTop ? estadisticas.recofiTop.nombre : 'No hay datos disponibles'}</p>
//           <p>Material más intercambiado: {estadisticas.materialTop ? estadisticas.materialTop.nombre : 'No hay datos disponibles'}</p>

//           {/* Gráficas */}
//           <div style={{ width: '60%', margin: '0 auto' }}>
//             <h3>Centro de Recolección Más Activo</h3>
//             <Bar data={dataRecofi} options={{ responsive: true }} />

//             <h3>Material Más Intercambiado</h3>
//             <Bar data={dataMaterial} options={{ responsive: true }} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Historialrecolecciones;


