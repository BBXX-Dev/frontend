import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { App } from "./components";
import { client } from "./lib";
import { theme, GlobalStyle } from "./theme";

class Main extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <App />
          </React.Fragment>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export { Main };
