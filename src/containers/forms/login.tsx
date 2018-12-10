import * as React from "react";
import styled from "styled-components";

import { StyledForm, StyledInput } from "../../components/forms";
import { FlexDiv } from "../../components/containers";

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
    return event;
  };

  render() {
    return (
      <FlexDiv>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <StyledInput
            inputType={"text"}
            title={"Username"}
            name={"username"}
            value={this.state.username}
            handleChange={this.handleChange}
            placeholder={"Username"}
            marginBottom="15px"
          />
          <StyledInput
            inputType={"password"}
            title={"Password"}
            name={"password"}
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder={"Password"}
          />
          <StyledInput
            inputType={"submit"}
            value="Log In"
            backgroundColor={"#444444"}
            color={"#FFFFFF"}
          />
        </form>
      </FlexDiv>
    );
  }
}
