import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(to bottom, #121212, #333 60%, #eee 85%)"
  );
  const [dark, setDark] = useState("dark")

  return (
    <GlobalContext.Provider
      value={{
        bgColor,
        setBgColor,
        dark,
        setDark
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
