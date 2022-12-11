import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../../context/appContext';
import './styles.scss';

type Props = {
  user: any;
};

const Card: React.FC<Props> = ({ user }) => {

  let navigate = useNavigate();

  const {
    setAppConfig,
    appConfig,
  } = useContext(AppContext);

  const handleSetSelectedUserAndRedirect = () => {
    // set selected user in context
    setAppConfig({
      ...appConfig,
      selectedUser: user,
    });
    navigate(`/user/${user.login}`);

    // redirect to user page

  };
  return (
    <div className="github-user-card" onClick={handleSetSelectedUserAndRedirect}>
      <span className='label' >User</span>
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
