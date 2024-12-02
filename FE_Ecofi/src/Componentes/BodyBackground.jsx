import React, { useEffect } from "react";

const BodyBackground = ({ background }) => {
  useEffect(() => {
    if (background) {
      document.body.style.backgroundImage = `url(${background})`;
    }

    // Limpieza
    return () => {
      document.body.style.backgroundImage = './src/img/fondo3.jpeg';
    };
  }, [background]);

  return null;
};

export default BodyBackground;
