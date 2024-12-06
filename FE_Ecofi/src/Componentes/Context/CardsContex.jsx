import React, { useState, useCallback } from "react";
import ContextoEcofi from './EcofiContex'

export function ProductProvider({ children }) {
  

  return (
    <ProductContext.Provider value={{ Productos, loadProductos, setProductos }}>
      {children}
    </ProductContext.Provider>
  );
}