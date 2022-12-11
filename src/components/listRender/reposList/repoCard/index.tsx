import React from 'react';
import './styles.scss';

type Props = {
  repo: any;
};

const Card: React.FC<Props> = ({ repo }) => {
  return (
    <div className="github-card">
      <span className='label'>Repo</span>
      <div className="github-card__avatar">
        <img
          src={repo?.owner?.avatar_url}
          alt="avatar"
        />
      </div>
      <div className="github-card__info">
        <div className="github-card__info__name">{repo?.name}</div>
      </div>
    </div>
  );
};

export default Card;
