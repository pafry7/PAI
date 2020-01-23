import React, { useContext, useState } from "react";
const AuthContext = React.createContext({});

const AuthProvider = (props: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = () => {
    setAuthenticated(true);
  };
  const me = () => {};

  const logout = () => {
    setAuthenticated(false);
  };
  const register = () => console.log("register");

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
        me,
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
