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

  if (authenticated) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
};

export default App;
