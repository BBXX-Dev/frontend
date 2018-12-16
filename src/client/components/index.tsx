import * as React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, ExplorePage, ProfilePage } from "../pages";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }
}

export { App };
