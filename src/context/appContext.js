import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [appConfig, setAppConfig] = useState({
    searchWord: "",
    isInputTouched: false,
    isRecentSearchesActive: false,
    selectedOption: "users",
    selectedUser: null,
    selectedRepo: null,
    page: 1,
  });

  const {
    searchWord,
    isInputTouched,
    selectedOption,
    page,
    isRecentSearchesActive,
    selectedUser,
    selectedRepo,
  } = appConfig;

  const isDataFetched = isInputTouched && searchWord.length >= 3;

  return (
    <AppContext.Provider
      value={{
        setAppConfig,
        appConfig,
        searchWord,
        isInputTouched,
        isRecentSearchesActive,
        selectedOption,
        page,
        isDataFetched,
        selectedUser,
        selectedRepo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
