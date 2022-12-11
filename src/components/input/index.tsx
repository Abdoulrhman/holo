import React, { useContext } from 'react';
import { SEARCH } from '../../constants/translations';
import { AppContext } from '../../context/appContext';
import { LangContext } from '../../context/langContext';
import { useAppDispatch } from '../../store/hooks';
import { addRecentSearch } from '../../store/recentSearch';

const Input: React.FC = () => {
  const { appConfig, searchWord, setAppConfig } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const { translate } = useContext(LangContext);


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
      type="search"
      placeholder={translate(SEARCH)}
    />
  );
};

export default Input;
