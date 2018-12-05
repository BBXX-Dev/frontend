import * as React from "react";
import { App } from "./components";
import { ApolloProvider } from "react-apollo";
import { client } from "./lib";

class Main extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

export { Main };
