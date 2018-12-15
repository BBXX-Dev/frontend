import * as React from "react";
import { PageLoader } from "../components/loader";

interface IState {
  loading: boolean;
}

class ProfilePage extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return this.state.loading ? <PageLoader /> : "Hello Profile Page!";
  }
}

export { ProfilePage };
