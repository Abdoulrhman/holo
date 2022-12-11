import React, { useContext, useEffect } from 'react';
import { USERS } from '../../constants';
import { AppContext } from '../../context/dataContext';
import { searchRepoGithub } from '../../store/githubRepo/githubRepoSlice';
import { searchUserGithub } from '../../store/githubUser/githubUserSlice';
import { useAppDispatch } from '../../store/hooks';
import UsersList from './usersList';
import ReposList from './reposList';
import _debounce from 'lodash/debounce';
import './styles.scss';
import useScrollBottom from '../../hooks/useScrollBottom';

const ListRender = () => {
  const { searchWord, selectedOption, page, setAppConfig, appConfig } =
    useContext(AppContext);
  const dispatch = useAppDispatch();

  const debouncedSearch = _debounce(() => {
    if (searchWord.length >= 3) {
      if (selectedOption === USERS) {
        dispatch(searchUserGithub({ q: searchWord, per_page: 10, page }));
      } else {
        dispatch(searchRepoGithub({ q: searchWord, per_page: 10, page }));
      }
    }
  }, 500);

  useEffect(() => {
    debouncedSearch();
  }, [searchWord, selectedOption]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      } else {
        if (selectedOption === USERS) {
          dispatch(
            searchUserGithub({ q: searchWord, per_page: 10, page: page + 1 }),
          );
        } else {
          dispatch(
            searchRepoGithub({ q: searchWord, per_page: 10, page: page + 1 }),
          );
        }
        setAppConfig({ ...appConfig, page: page + 1 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  return <div>{selectedOption === USERS ? <UsersList /> : <ReposList />}</div>;
};

export default ListRender;
