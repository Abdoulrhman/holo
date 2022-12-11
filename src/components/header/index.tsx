import React, { useContext, useRef } from 'react';

import GithubIcon from '../../assets/github.svg';
import { AppContext } from '../../context/appContext';
import Input from '../input';
import Select from '../select';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import {
  removeRecentSearch,
  clearRecentSearch,
} from '../../store/recentSearch';
import './styles.scss';
import { LangContext } from '../../context/langContext';
import { CLEAR_ALL, GITHUB_SEARCHER, RECENT_SEARCHES, SEARCH_USERS } from '../../constants/translations';
import { ThemeContext } from '../../context/themeContext';

const Header: React.FC = () => {
  const {
    isDataFetched,
    isRecentSearchesActive,
    setAppConfig,
    appConfig,
    searchWord,
  } = useContext(AppContext);
  const recentSearches = useAppSelector((state) => state.recentSearches);
  const { changeLang, lang, translate } = useContext(LangContext);
  const { useDarkTheme, setUseDarkTheme } = useContext(ThemeContext);
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

  const handleThemeChange = () => {
    setUseDarkTheme(!useDarkTheme);
  };

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
            <div className='titles'>
              <p>{translate(GITHUB_SEARCHER)} </p>
              <p>{translate(SEARCH_USERS)}</p>
            </div>
            <div className='actions' >
              <span className='lang-icon' onClick={lang === "en" ? () => changeLang("ar") : () => changeLang("en")} >
                &#127760;
              </span>
              <span className='theme-icon' onClick={handleThemeChange}>
                &#127769;
              </span>
            </div>

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
              <p className="recent-searches-title">
                {translate(RECENT_SEARCHES)}
              </p>
              <p
                className="recent-searches-clear"
                onClick={handleClearRecentSearch}
              >
                {translate(CLEAR_ALL)}
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
