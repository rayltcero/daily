import React from "react";;

interface AuthState {
  user: any;
  session: any;
  isLoading: boolean;
  register: (data: any) => void;
  login: (data: any) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthState>(
  {
    user: null,
    session: null,
    isLoading: false,
    register: () => {},
    login: () => {},
    logout: () => {}
  }
);
