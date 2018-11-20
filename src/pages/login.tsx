import * as React from "react";
import { App } from "../components/app";
import Button from "@material-ui/core/Button";
import LabelBottomNavigation from "../components/nav/bottom";

class LoginPage extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello Login Page!
      </Button>
    );
  }
}

export { LoginPage };
