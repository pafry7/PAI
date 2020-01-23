import { Redirect, RouteComponentProps, Router } from "@reach/router";

import { Income } from "AuthenticatedApp/Income";
import { NotFound } from "common/NotFound";
import React from "react";
import { Summary } from "AuthenticatedApp/Summary";

const RedirectHome = (props: RouteComponentProps) => (
  <Redirect noThrow to="/summary" />
);

export function AuthenticatedApp() {
  return (
    <Router>
      <RedirectHome path="/" />
      <Summary path="/summary" />
      <Income path="/income" />
      <NotFound default />
    </Router>
  );
}
