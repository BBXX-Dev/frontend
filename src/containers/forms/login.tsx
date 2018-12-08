import * as React from "react";
import { InputGeneric } from "../../components/forms";
import { DivFlex } from "../../components/grids";

interface IState {
  username: string;
  password: string;
}

export class LoginForm extends React.Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
      password: undefined
    };
  }

  handleChange = <T extends keyof IState>(
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const newState = {
      [event.target.name]: event.target.value
    };
    this.setState(newState as { [P in T]: IState[P] });
  };

  render() {
    console.log(this.state);
    return (
      <DivFlex className="loginRoot">
        <InputGeneric
          label="Username"
          variant="filled"
          name="username"
          onChange={this.handleChange}
        />
        <InputGeneric
          label="Password"
          variant="filled"
          name="password"
          onChange={this.handleChange}
        />
      </DivFlex>
    );
  }
}
