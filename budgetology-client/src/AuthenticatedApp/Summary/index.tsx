import { Link, RouteComponentProps } from "@reach/router";

import { LogoutComponent } from "generated/apolloComponents";
import React from "react";
import { useAuth } from "common/AuthContent";

export const Summary: React.FC<RouteComponentProps> = () => {
  const auth: any = useAuth();
  return (
    <>
      <h1>Summary</h1>
      <p>something will be here</p>
      <LogoutComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate();

              if (response && response.data && response.data.logout) {
                auth.logout();
              }
            }}
          >
            call logout mutation
          </button>
        )}
      </LogoutComponent>
      <Link to="/income">income</Link>
    </>
  );
};
