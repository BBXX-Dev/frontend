import * as React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

const LoginForm2 = () => (
    <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                    <Image src="https://media.licdn.com/dms/image/C4D0BAQHnbbAJvh3aeA/company-logo_200_200/0?e=2159024400&v=beta&t=-1jf5i2c5vSU_lzKmpqJNpQnpNKUT1pdS0YJsl2VBWQ" />{" "}
                    Log-in to your account
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="Username" />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

                        <Button color="teal" fluid size="large">
                            Login
                        </Button>
                    </Segment>
                </Form>
                <a href="#">
                    <Message>New? Click here to sign up.</Message>
                </a>
            </Grid.Column>
        </Grid>
    </div>
);

export { LoginForm2 };
