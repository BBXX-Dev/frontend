import * as React from "react";
import { Card, Image, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import { StyledInput } from "../../components/forms";
import { CenterDiv } from "../../components/containers";

const Icon = require("../../assets/icon-512x512.png");

import { LoginForm2 } from "../../components/layouts";

interface IState {
    username: string;
    password: string;
}

export class LoginForm extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = <T extends keyof IState>(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>,
    ) => {
        const newState = {
            [event.target.name]: event.target.value,
        };
        this.setState(newState as { [P in T]: IState[P] });
    };

    handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(this.state);
        return event;
    };

    render() {
        return (
            <div>
                <Card style={{ marginBottom: "100px" }}>
                    <Image src="https://media.licdn.com/dms/image/C4D0BAQHnbbAJvh3aeA/company-logo_200_200/0?e=2159024400&v=beta&t=-1jf5i2c5vSU_lzKmpqJNpQnpNKUT1pdS0YJsl2VBWQ" />
                </Card>
                <CenterDiv>
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
                <LoginForm2 />
            </div>
        );
    }
}
