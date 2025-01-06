import React, { useEffect, useState } from 'react';
import { getHrecoleccion } from '../services/HrecoleccionServices';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import "../Styles/Estadisticas.css"



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
        backgroundColor: 'rgba(17, 184, 53, 0.6)'
      }
    ]
  };

  return (
    <div id="EstadisticasContainer">
      <h2 id="GraficaH2">Estadísticas</h2>
      {loading ? (
        <p id="GraficaLoadingLabel">Cargando estadísticas...</p>
      ) : error ? (
        <p id="GraficaErrorLabel">{error}</p>
      ) : (
        <div id="GraficasContainer">
          <div id="RecofiChartContainer">
            <h3 id="GraficaRecofiLabel">Centros de Recolección</h3>
            <Bar data={dataRecofi} options={{ responsive: true }} />
          </div>

          <div id="MaterialesChartContainer">
            <h3 id="GraficaMaterialesLabel">Materiales</h3>
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
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Historialrecolecciones = () => {
//   const [estadisticas, setEstadisticas] = useState({
//     recofiIntercambios: [],
//     materialesIntercambios: []
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEstadisticas = async () => {
//       try {
//         const data = await getHrecoleccion();
//         setEstadisticas({
//           recofiIntercambios: data.recofiIntercambios,
//           materialesIntercambios: data.materialesIntercambios
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

//   // Datos para la gráfica de centros de recolección
//   const dataRecofi = {
//     labels: estadisticas.recofiIntercambios.map(recofi => recofi.nombre),
//     datasets: [
//       {
//         label: 'Intercambios por Centro de Recolección',
//         data: estadisticas.recofiIntercambios.map(recofi => recofi.totalIntercambios),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)'
//       }
//     ]
//   };

//   // Datos para la gráfica de materiales
//   const dataMateriales = {
//     labels: estadisticas.materialesIntercambios.map(material => material.nombre),
//     datasets: [
//       {
//         label: 'Intercambios por Material',
//         data: estadisticas.materialesIntercambios.map(material => material.totalIntercambios),
//         backgroundColor: 'rgba(153, 102, 255, 0.6)'
//       }
//     ]
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
//           <div style={{ width: '60%', margin: '0 auto' }}>
//             <h3>Centros de Recolección</h3>
//             <Bar data={dataRecofi} options={{ responsive: true }} />

//             <h3>Materiales</h3>
//             <Bar data={dataMateriales} options={{ responsive: true }} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Historialrecolecciones;






