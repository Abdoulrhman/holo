import React, { useContext, useEffect, useRef } from 'react';
import GithubIcon from '../../assets/github.svg';
import { AppContext } from '../../context/dataContext';
import Input from '../input';
import Select from '../select';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  removeRecentSearch,
  clearRecentSearch,
} from '../../store/recentSearch';

import './styles.scss';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header: React.FC = () => {
  const {
    isDataFetched,
    isRecentSearchesActive,
    setAppConfig,
    appConfig,
    searchWord,
  } = useContext(AppContext);
  const recentSearches = useAppSelector((state) => state.recentSearches);
  const { recentSearch } = recentSearches;
  const dispatch = useAppDispatch();

  // To Handle Outside Click
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setAppConfig({
      ...appConfig,
      isRecentSearchesActive: false,
      isInputTouched: true,
      searchWord,
    });
  });

  useEffect(() => {
    console.log('appConfig', appConfig);
  }, [appConfig]);

  const handleRemoveRecentSearch = (search: string) => {
    dispatch(removeRecentSearch(search));
  };

  const handleClearRecentSearch = () => {
    dispatch(clearRecentSearch());
  };

  const handleSetSearchWord = (search: string) => {
    console.log('search', search);
    setAppConfig({
      ...appConfig,
      searchWord: search,
    });
  };

  return (
    <div className={`header-wrapper ${isDataFetched && 'allocation'}`}>
      <div className="header-content">
        <div className="header-title">
          <div className="header-title-left">
            <img
              src={GithubIcon}
              alt="logo"
            />
          </div>
          <div className="header-title-right">
            <p>Github Searcher </p>
            <p>Search Users or Repositories below</p>
          </div>
        </div>
        <div className="header-actions">
          <Input />
          <Select />
        </div>
        {isRecentSearchesActive && recentSearch.length ? (
          <div
            className="recent-searches"
            ref={wrapperRef}
          >
            <div className="recent-searches-header">
              <p className="recent-searches-title">Recent Searches</p>
              <p
                className="recent-searches-clear"
                onClick={handleClearRecentSearch}
              >
                Clear All
              </p>
            </div>

            <ul className="recent-searches-list">
              {recentSearch.map((search) => (
                <li
                  className="recent-searches-list-item"
                  key={search}
                  onClick={() => handleSetSearchWord(search)}
                >
                  <span>{search}</span>
                  <span onClick={() => handleRemoveRecentSearch(search)}>
                    &#10005;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
