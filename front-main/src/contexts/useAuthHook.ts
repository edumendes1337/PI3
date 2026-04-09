// src/contexts/useAuthHook.ts
import { useContext } from 'react';
import { AuthContext } from './authContext';
import { AUTH_ERROR_MESSAGE } from './authConstants';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(AUTH_ERROR_MESSAGE);
  }
  return context;
};
