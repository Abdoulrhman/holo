import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import CardLoader from '../../cardLoader';
import RepoCard from './repoCard';

const ReposList = () => {
  const repo = useAppSelector((state) => state.repo);
  const { loading, repos, error } = repo;

  return (
    <div>
      {loading && <CardLoader />}
      {!loading && error ? <div>Error: {error}</div> : null}
      {repos.length ? (
        <div className="list-cards">
          {repos.map((repo: any) => (
            <RepoCard
              repo={repo}
              key={repo.id}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ReposList;
