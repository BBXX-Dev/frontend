import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { App } from "./components";
import { client } from "./lib";
import { theme, GlobalStyle } from "./theme";
import { Router } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

class Main extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <GlobalStyle />
                        <App />
                        {window.location.pathname === "/" ? null : (
                            <div style={{ bottom: "0", position: "fixed", width: "100%" }}>
                                <Menu
                                    icon="labeled"
                                    borderless
                                    widths={3}
                                    style={{
                                        flexShrink: 0, //don't allow flexbox to shrink it
                                        borderRadius: 0, //clear semantic-ui style
                                        margin: 0, //clear semantic-ui style
                                    }}
                                >
                                    <Menu.Item to="/home/">
                                        <Icon name="home" />
                                        Home
                                    </Menu.Item>
                                    <Menu.Item to="/explore/">
                                        <Icon name="wpexplorer" />
                                        Explore
                                    </Menu.Item>
                                    <Menu.Item to="/profile/">
                                        <Icon name="user" />
                                        Profile
                                    </Menu.Item>
                                </Menu>
                            </div>
                        )}
                    </React.Fragment>
                </ThemeProvider>
            </ApolloProvider>
        );
    }
}

export { Main };
