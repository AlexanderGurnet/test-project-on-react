import React from 'react';

import UserCard from '../UserCard/UserCard';

const UsersList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
};

export default React.memo(UsersList);
