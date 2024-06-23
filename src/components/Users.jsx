import React from 'react';
import User from './User';
import { UserHooks } from '../hooks/UsersHooks';

const Users = () => {
  const { users } = UserHooks();
  return (
    <div className="grid grid-cols-4 gap-3">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
