import React, { useContext, useState } from 'react';
import { UserHooks } from '../hooks/UsersHooks';

const NewUsers = () => {
  const { users, setUsers } = UserHooks();
  const [name, setName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [image, setImage] = useState('');
  const handleAddUser = e => {
    e.preventDefault();
    const newId =
      users.length > 0 ? Math.max(...users.map(user => user.id)) : '0';
    const newUser = {
      id: newId + 1,
      userName: name,
      contactNo: contactNo,
      image: image,
    };
    setName('');
    setContactNo('');
    setImage('');
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <>
      <div className="pt-3 text-center mb-6 bg-white">
        <div className="mb-6">Add New Users</div>
        <form className="w-2/3 mx-auto p-4">
          <input
            value={name}
            placeholder="add new users"
            onChange={e => setName(e.target.value)}
            type="text"
            className="w-full bg-white border border-black mb-6 p-2 focus:outline-none"
          />
          <input
            value={contactNo}
            placeholder="please enter contact no"
            onChange={e => setContactNo(e.target.value)}
            type="text"
            className="w-full bg-white border border-black mb-6 p-2 focus:outline-none"
          />
          <input
            name="image"
            type="file"
            onClick={e => handleImage(e.target.file[0])}
            className="w-full bg-white border border-black mb-6 p-2 focus:outline-none"
          />
          <button
            onClick={handleAddUser}
            className="bg-slate-500 py-2 px-2 rounded-md text-white"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default NewUsers;
