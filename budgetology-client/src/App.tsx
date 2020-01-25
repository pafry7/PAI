import React, { useEffect } from "react";

import { AuthenticatedApp } from "AuthenticatedApp";
import { UnauthenticatedApp } from "UnauthenticatedApp";
import { useAuth } from "common/AuthContent";

const App: React.FC = () => {
  const { login, authenticated }: any = useAuth();
  useEffect(() => {
    if (document.cookie) {
      login();
    }
  });

  return authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
