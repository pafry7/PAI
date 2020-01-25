import React, { useContext, useState } from "react";

import { useLogoutMutation } from "generated/apolloComponents";

const AuthContext = React.createContext({});

const AuthProvider = (props: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [logoutMutation] = useLogoutMutation();
  const [user, setUser]: any = useState(null);
  const login = async () => {
    setAuthenticated(true);
  };
  const logout = async () => {
    const response = await logoutMutation();
    if (response && response.data && response.data.logout) {
      setAuthenticated(false);
      setUser(false);
    }
  };
  const register = () => console.log("register");

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        setUser,
        logout,
        user,
        register
      }}
      {...props}
    />
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { useAuth, AuthProvider };
