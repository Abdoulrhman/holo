import React, { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  useEffect(() => {
    if (useDarkTheme)
      document.getElementById("rootHTML").classList.add("dark-theme");
    else document.getElementById("rootHTML").classList.remove("dark-theme");
  }, [useDarkTheme]);

  return (
    <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
