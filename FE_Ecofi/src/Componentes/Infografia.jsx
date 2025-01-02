import React from 'react';
import '../Styles/Infografia.css'; 
import Infografia from "../IMG/Infografía.png"

const InfografiaEcofi = () => {
  return (
    <div className="infografia-container">
      <img 
        src= {Infografia}
        alt="Infografía" 
        className="infografia"
      />
    </div>
  );
};

export default InfografiaEcofi;
