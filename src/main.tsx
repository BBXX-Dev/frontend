import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import { Router, Switch, Route } from "react-router-dom";

import { HomePage, LoginPage, ExplorePage, ProfilePage } from "./pages";
import { App } from "./components";
import { client } from "./lib";
import { theme, GlobalStyle } from "./theme";
import { configureHistory } from "./configureHistory";

const history = configureHistory();

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            {/* <App /> */}
            <Router history={history}>
              {/* <div>
          <h2>Hello World!</h2>
          <ul>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/explore"}>Explore</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </ul>
          <hr /> */}
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/explore" component={ExplorePage} />
                <Route path="/profile" component={ProfilePage} />
              </Switch>
              {/* </div> */}
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export { Main };
