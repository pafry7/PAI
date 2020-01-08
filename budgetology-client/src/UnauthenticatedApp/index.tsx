import { Container } from "@material-ui/core";
import { Content } from "UnauthenticatedApp/Content";
import { Header } from "UnauthenticatedApp/Header";
import React from "react";

export function UnauthenticatedApp() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}
