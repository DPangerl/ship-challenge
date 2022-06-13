import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme, GlobalStyle } from "./theme";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { createClient } from "./lib/apolloClient";

function WrappedApp() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={createClient("https://api.spacex.land/graphql")}>
          <Router>
            <App />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<WrappedApp />);
