import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

interface IState {
    username: string;
    password: string;
}

class Login extends React.Component<RouteComponentProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    public handleLogin = () => {
        const { username, password } = this.state;
        const { history } = this.props;

        if (username === "lucas" && password === "bbxx") {
            history.push("/profile");
        }
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
        console.log(this.state.username);
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
                        <Form size="large">
                            <Segment stacked>
                                <Form.Input
                                    name="username"
                                    onChange={this.handleChange}
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Username"
                                />
                                <Form.Input
                                    name="password"
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
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
                        <a href="#">
                            <Button fluid size="large">
                                New? Click here to sign up.
                            </Button>
                        </a>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export { Login };
