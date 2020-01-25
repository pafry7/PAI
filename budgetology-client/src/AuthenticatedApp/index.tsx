import React, { useEffect } from "react";
import { Redirect, RouteComponentProps, Router } from "@reach/router";

import { Income } from "AuthenticatedApp/Income";
import { NotFound } from "common/NotFound";
import { Summary } from "AuthenticatedApp/Summary";
import { useAuth } from "common/AuthContent";
import { useMeQuery } from "generated/apolloComponents";

const RedirectHome = (props: RouteComponentProps) => (
  <Redirect noThrow to="/summary" />
);

export function AuthenticatedApp() {
  const { setUser }: any = useAuth();
  const { loading, data } = useMeQuery();
  useEffect(() => {
    if (data && data.me && data.me.id) {
      setUser(data.me.id);
    }
  }, [loading, data, setUser]);

  return (
    <Router>
      <RedirectHome path="/" />
      <Summary path="/summary" />
      <Income path="/income" />
      <NotFound default />
    </Router>
  );
}
