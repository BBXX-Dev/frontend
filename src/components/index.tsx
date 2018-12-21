import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export * from "./menu";
export * from "./layouts";

class App extends React.Component<RouteComponentProps, {}> {
    public render() {
        return (
            <div>
                {window.location.pathname === "/" ? null : (
                    <div
                        style={{
                            bottom: "0",
                            position: "fixed",
                            width: "100%"
                        }}
                    >
                        <Menu
                            icon="labeled"
                            borderless
                            widths={3}
                            style={{
                                borderRadius: 0, // clear semantic-ui style
                                flexShrink: 0, // don't allow flexbox to shrink it
                                margin: 0 // clear semantic-ui style
                            }}
                        >
                            <Menu.Item to="/home/">
                                <a href="/home">
                                    <Icon name="home" />
                                    Home
                                </a>
                            </Menu.Item>
                            <Menu.Item to="/explore/">
                                <a href="/explore">
                                    <Icon name="wpexplorer" />
                                    Explore
                                </a>
                            </Menu.Item>
                            <Menu.Item to="/profile/">
                                <a href="/profile">
                                    <Icon name="user" />
                                    Profile
                                </a>
                            </Menu.Item>
                        </Menu>
                    </div>
                )}
            </div>
        );
    }
}

export { App };
