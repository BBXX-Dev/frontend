import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { App } from "./components";
import { client } from "./lib";
import { theme, createGlobalStyle } from "./theme";

createGlobalStyle`
    * { margin: 0; padding: 0; }
`;

class Main extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export { Main };
