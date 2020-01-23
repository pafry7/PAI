import { Link, RouteComponentProps } from "@reach/router";

import React from "react";

export const Income: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <h1>Income</h1>
      <p>something will be here</p>
      <Link to="/summary">summary</Link>
    </>
  );
};
