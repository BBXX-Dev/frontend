import * as React from "react";

import { LoginForm } from "../containers/forms";
import { PageLoader } from "../components/loader";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { BottomNav } from "../components";

interface IState {
  loading: boolean;
}

class Login extends React.Component<RouteComponentProps, IState> {
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
    return this.state.loading ? (
      <PageLoader />
    ) : (
      <div>
        <LoginForm />
        {BottomNav}
      </div>
    );
  }
}

export const LoginPage = withRouter(Login);
