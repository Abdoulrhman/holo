import React, { createContext, useState, useEffect } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, changeLang] = usePersistedState("lang", "en");
  const [isDisconnected, setDisconnected] = useState(false);
  const [direction, setDirection] = useState("ltr");

  setInterval(function () {
    navigator.onLine ? setDisconnected(false) : setDisconnected(true);
  }, 3000);

  useEffect(() => {
    if (lang === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [lang]);

  return (
    <LangContext.Provider
      value={{
        lang,
        direction,
        changeLang,
        isDisconnected,
        translate: (value) => {
          const [en, ar] = value.split("|");
          return lang === "en" ? en : ar;
        },
      }}
    >
      {isDisconnected && <NoConnection />}
      {children}
    </LangContext.Provider>
  );
};

const NoConnection = () => (
  <div
    style={{
      color: "red",
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "0",
      left: "0",
      margin: "auto",
    }}
  >
    <p>App Currently offline </p>
  </div>
);
