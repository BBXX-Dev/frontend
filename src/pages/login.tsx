import * as React from "react";

import { LoginForm } from "../containers/forms";
import { PageLoader } from "../components/loader";

interface IState {
  loading: boolean;
}

class LoginPage extends React.Component<{}, IState> {
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
    return this.state.loading ? <PageLoader /> : <LoginForm />;
  }
}

export { LoginPage };
