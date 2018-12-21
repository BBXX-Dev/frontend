import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

// const Icon = require("../../assets/icon-512x512.png");

interface IState {
  username: string;
  password: string;
  message: string;
}

class LF extends React.Component<RouteComponentProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  public handleNewUser = () => {
    const { history } = this.props;
    history.push("/home");
  };

  public handleLogin = () => {
    const { username, password } = this.state;
    const { history } = this.props;

    if (username === "lucas" && password === "bbxx") {
      history.push("/home");
      return;
    } else if (!username || !password) {
      this.setState({
        message: !username
          ? "You must enter a username"
          : "You must enter a password"
      });
    } else {
      this.setState({
        message:
          "The username or password you entered was incorrect. Please try again."
      });
    }
    setTimeout(() => {
      this.setState({
        message: ""
      });
    }, 10000);
  };

  public handleChange = <T extends keyof IState>(
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const newState = {
      [event.target.name]: event.target.value
    };
    this.setState(newState as { [P in T]: IState[P] });
  };

  public render() {
    const { message } = this.state;

    return (
      <div className="login-form">
        <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="grey" textAlign="center">
              <Image src="https://media.licdn.com/dms/image/C4D0BAQHnbbAJvh3aeA/company-logo_200_200/0?e=2159024400&v=beta&t=-1jf5i2c5vSU_lzKmpqJNpQnpNKUT1pdS0YJsl2VBWQ" />{" "}
              Log-in to your account
            </Header>
            {message ? (
              <Message negative>
                <Message.Header>{message}</Message.Header>
              </Message>
            ) : null}
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  name="username"
                  onChange={this.handleChange}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  required
                />
                <Form.Input
                  name="password"
                  onChange={this.handleChange}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  required
                />

                <Button
                  color="grey"
                  fluid
                  size="large"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Button fluid size="large" onClick={this.handleNewUser}>
              New? Click here to sign up.
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export const LoginForm = withRouter(LF);

/* <Card style={{ marginBottom: "100px" }}>
    <Image src="https://media.licdn.com/dms/image/C4D0BAQHnbbAJvh3aeA/company-logo_200_200/0?e=2159024400&v=beta&t=-1jf5i2c5vSU_lzKmpqJNpQnpNKUT1pdS0YJsl2VBWQ" />
</Card> */
