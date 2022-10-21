import { createContext, useState, useContext, ReactNode,Dispatch,SetStateAction,useEffect } from 'react';
import { User } from "./types/user";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
type LoginUser = User & { isAdmin: boolean };
export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const AuthContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);
export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthProvider = (props:{ children:ReactNode}) =>{
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loginUser) => {
      console.log(loginUser);
      // setLoginUser(loginUser);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </AuthContext.Provider>

  );
}