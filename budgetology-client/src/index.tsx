import * as serviceWorker from "./serviceWorker";

import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { AuthProvider } from "common/AuthContent";
import { CssBaseline } from "@material-ui/core";
import { HttpLink } from "apollo-link-http";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "common/theme";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
