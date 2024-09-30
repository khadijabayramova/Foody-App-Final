// src/context/GlobalContext.js
import React, { createContext, useState } from "react";

// Create Context
export const GlobalContext = createContext();

// Create a Global Provider Component
export const GlobalProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(false);
  
  return (
    <GlobalContext.Provider
      value={{  }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
