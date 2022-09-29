import { createContext, useState, useContext } from 'react';

const AuthContext = createContext('light');

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }:any) {
  const [user, setUser] = useState('');

  const value = {
    user,
  };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}