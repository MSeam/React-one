import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

export const UserHooks = () => {
  return useContext(UsersContext);
};
