import React, { useEffect, useState } from 'react';
import { getHrecoleccion } from '../services/HrecoleccionServices';





const Historialrecolecciones = () => {
  const [estadisticas, setEstadisticas] = useState({
    recofiTop: null,
    materialTop: null,
  });
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchEstadisticas = async () => {
      try {
        const data = await getHrecoleccion();
        setEstadisticas({
          recofiTop: data.recofiTop,
          materialTop: data.materialTop,
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

  return (
    <div>
      <h2>Estadísticas</h2>
      {loading ? (
        <p>Cargando estadísticas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
<p>Centro de recolección más activo: {estadisticas.recofiTop ? estadisticas.recofiTop.nombre : 'No hay datos disponibles'}</p>
<p>Material más intercambiado: {estadisticas.materialTop ? estadisticas.materialTop.nombre : 'No hay datos disponibles'}</p>
        </div>
      )}
    </div>
  );
};

export default Historialrecolecciones;
