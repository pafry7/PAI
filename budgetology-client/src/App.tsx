import { AuthProvider, useAuth } from "common/AuthContent";

import { AuthenticatedApp } from "AuthenticatedApp";
import { CssBaseline } from "@material-ui/core";
import React from "react";
// import { AuthenticatedApp } from "AuthenticatedApp";
import { ThemeProvider } from "@material-ui/styles";
import { UnauthenticatedApp } from "UnauthenticatedApp";
import { meQuery } from "graphql/me";
import { theme } from "common/theme";
import { useQuery } from "@apollo/react-hooks";

const App: React.FC = () => {
  const auth: any = useAuth();
  if (auth.authenticated) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
};

export default App;
