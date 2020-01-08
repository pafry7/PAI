import { CssBaseline } from "@material-ui/core";
import React from "react";
// import { AuthenticatedApp } from "AuthenticatedApp";
import { ThemeProvider } from "@material-ui/styles";
import { UnauthenticatedApp } from "UnauthenticatedApp";
import { theme } from "common/theme";

const App: React.FC = () => {
  // const [user, setUser] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
      <UnauthenticatedApp />
    </ThemeProvider>
  );
};

export default App;
