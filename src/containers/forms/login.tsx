import * as React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// const Icon = require("./icon-512x512.png");

import { StyledInput } from "../../components/forms";
import { CenterDiv } from "../../components/containers";

interface IState {
  username: string;
  password: string;
}

export class LoginForm extends React.Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
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

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(this.state);
    return event;
  };

  render() {
    return (
      <CenterDiv>
        <Card>
          <CardMedia style={{ height: 140 }} image="" title="BBXX Logo" />
        </Card>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <StyledInput
            inputType={"text"}
            title={"Username"}
            name={"username"}
            value={this.state.username}
            onChange={this.handleChange}
            placeholder={"Username"}
            marginBottom="15px"
          />
          <StyledInput
            inputType={"password"}
            title={"Password"}
            name={"password"}
            value={this.state.password}
            onChange={this.handleChange}
            placeholder={"Password"}
          />
          <StyledInput
            inputType={"submit"}
            value="Log In"
            backgroundColor={"#444444"}
            color={"#FFFFFF"}
          />
        </form>
      </CenterDiv>
    );
  }
}
