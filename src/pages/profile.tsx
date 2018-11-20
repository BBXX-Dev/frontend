import * as React from "react";
import { App } from "../components/app";
import Button from "@material-ui/core/Button";

class ProfilePage extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello Profile Page!
      </Button>
    );
  }
}

export { ProfilePage };
