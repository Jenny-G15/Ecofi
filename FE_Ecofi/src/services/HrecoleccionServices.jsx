export async function getHrecoleccion() {
  try {
      const response = await fetch('http://localhost:3000/recoleccion', {
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

  