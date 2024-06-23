import React, { useContext } from 'react';
import { UserHooks } from '../hooks/UsersHooks';

const User = ({ user }) => {
  const { users, setUsers } = UserHooks();
  const { id, userName, contactNo, image } = user;

  const handleDelete = id => {
    const filterdUser = users.filter(user => user.id !== id);
    setUsers(filterdUser);
  };
  return (
    <div className="bg-white shadow-md px-2 py-3 rounded-md">
      <p className="text-base font-semibold">{id}</p>
      <p className="text-lg font-bold">{userName}</p>
      <p className="text-lg font-bold">{contactNo}</p>
      <img src={image} alt="User Avatar" className="w-full h-32 object-cover rounded-md" />
      <button
        onClick={() => handleDelete(id)}
        className="bg-red-600 px-5 py-2 rounded-md mt-3 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default User;
