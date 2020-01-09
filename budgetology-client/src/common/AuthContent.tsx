import React, { useContext, useState } from "react";

const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
  const [user] = useState(null);
  const [authenticated] = useState(false);

  const login = () => console.log("login");
  const logout = () => console.log("logout");
  const register = () => console.log("register");

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        login,
        logout,
        register
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};
