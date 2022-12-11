/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { USERS } from '../../constants';
import { AppContext } from '../../context/appContext';
import { searchRepoGithub } from '../../store/githubRepo/githubRepoSlice';
import { searchUserGithub } from '../../store/githubUser/githubUserSlice';
import { useAppDispatch } from '../../store/hooks';
import UsersList from './usersList';
import ReposList from './reposList';
import _debounce from 'lodash/debounce';
import './styles.scss';
import usePageBottom from '../../hooks/useScrollBottom';

const ListRender = () => {
  const { searchWord, selectedOption, page } =
    useContext(AppContext);
  const dispatch = useAppDispatch();
  const isPageBottom = usePageBottom();

  useEffect(() => {
    console.log('isPageBottom', isPageBottom);
  }, [isPageBottom]);


  const debouncedSearch = _debounce(() => {

    if (searchWord.length >= 3) {
      if (selectedOption === USERS) {
        dispatch(searchUserGithub({ q: searchWord, per_page: 10, page: page > 1 ? page : 1 }));
      } else {
        dispatch(searchRepoGithub({ q: searchWord, per_page: 10, page: page > 1 ? page : 1 }));
      }
    }
  }, 500);

  useEffect(() => {
    debouncedSearch();
  }, [searchWord, selectedOption]);



  return <div>{selectedOption === USERS ? <UsersList /> : <ReposList />}</div>;
};

export default ListRender;
