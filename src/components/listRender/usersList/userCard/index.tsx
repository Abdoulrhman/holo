import React from 'react';
import './styles.scss';

type Props = {
  user: any;
};

const Card: React.FC<Props> = ({ user }) => {
  return (
    <div className="github-card">
      <div className="github-card__avatar">
        <img
          src={user?.avatar_url}
          alt="avatar"
        />
      </div>
      <div className="github-card__info">
        <div className="github-card__info__name">{user?.login}</div>
      </div>
    </div>
  );
};

export default Card;
