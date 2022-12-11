import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/dataContext';
import { useAppDispatch } from '../../store/hooks';
import { addRecentSearch } from '../../store/recentSearch';

const Input: React.FC = () => {
  const { appConfig, searchWord, setAppConfig } = useContext(AppContext);
  const dispatch = useAppDispatch();

  const handleAddRecentSearch = (e: any) => {
    if (e.target.value !== '') {
      dispatch(addRecentSearch(e.target.value));
    }
  };

  return (
    <input
      onFocus={() =>
        setAppConfig({
          ...appConfig,
          isInputTouched: true,
          isRecentSearchesActive: true,
        })
      }
      onBlur={handleAddRecentSearch}
      onChange={(e) =>
        setAppConfig({
          ...appConfig,
          searchWord: e.target.value,
        })
      }
      value={searchWord}
      type="text"
      placeholder="Start typing to search .."
    />
  );
};

export default Input;
