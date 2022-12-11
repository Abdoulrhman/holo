import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import CardLoader from '../../cardLoader';
import Card from './userCard';

const UsersList = () => {
  const user = useAppSelector((state) => state.user);
  const { loading, users, error } = user;

  return (
    <div>
      {loading && <CardLoader />}
      {!loading && error ? <div>Error: {error}</div> : null}
      {users.length ? (
        <div className="list-cards">
          {users.map((user) => (
            <Card
              user={user}
              key={user.id}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UsersList;
