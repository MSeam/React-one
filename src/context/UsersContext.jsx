import { createContext, useRef, useState } from 'react';

export const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        useRef,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
