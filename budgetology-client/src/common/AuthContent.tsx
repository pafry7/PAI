import React, { useContext, useState } from "react";

import { MeComponent } from "generated/apolloComponents";
import { meQuery } from "graphql/me";
import { useQuery } from "@apollo/react-hooks";

const AuthContext = React.createContext({});

const AuthProvider = (props: any) => {
  const [user, setUser]: any = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const { loading, error, data } = useQuery(meQuery);

  const login = () => {
    if (document.cookie) {
      setAuthenticated(true);
    } else {
      console.log("nie ma cookie");
    }
  };
  const me = () => {
    if (loading) return null;
    if (error) return null;
    return data.me.id;
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
  };
  const register = () => console.log("register");

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        data,
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
