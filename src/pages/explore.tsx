import * as React from "react";
import { App } from "../components";
import Button from "@material-ui/core/Button";

class ExplorePage extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello Explore Page!
      </Button>
    );
  }
}

export { ExplorePage };
