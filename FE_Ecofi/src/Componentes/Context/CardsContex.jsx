import React, { useState, useCallback } from "react";
import ContextoEcofi from './EcofiContex'

export function ProductProvider({ children }) {
  

  return (
    <ContextoEcofi.Provider value={{ Productos, loadProductos, setProductos }}>
      {children}
    </ContextoEcofi.Provider>
  );
}