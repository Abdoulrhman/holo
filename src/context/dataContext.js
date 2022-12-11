import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [appConfig, setAppConfig] = useState({
    searchWord: '',
    isInputTouched: false,
    isRecentSearchesActive: false,
    selectedOption: 'users',
    page: 1,
  });

  const {
    searchWord,
    isInputTouched,
    selectedOption,
    page,
    isRecentSearchesActive,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
