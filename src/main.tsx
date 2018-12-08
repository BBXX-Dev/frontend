import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { App } from "./components";
import { client } from "./lib";
import { theme, createGlobalStyle, GlobalStyle } from "./theme";

createGlobalStyle`
    * { margin: 0; padding: 0; }
`;

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
