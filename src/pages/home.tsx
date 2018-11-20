import * as React from "react";
import { App } from "../components/app";
import Button from "@material-ui/core/Button";

class HomePage extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello Home Page!
      </Button>
    );
  }
}

export { HomePage };
