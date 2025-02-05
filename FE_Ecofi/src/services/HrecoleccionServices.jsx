export async function getHrecoleccion() {
  try {
      const response = await fetch('http://192.168.0.4:3000/recoleccion/estadisticas', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`Error al obtener las estadísticas: ${response.status}`);
      }

      return await response.json();
  } catch (error) {
      console.error('Error al obtener las estadísticas:', error);
      throw error;
  }
}

  