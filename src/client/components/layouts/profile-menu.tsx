import * as React from "react";
import { Input, Label, Menu, Icon, List } from "semantic-ui-react";

interface IState {
    activeItem: string;
}

export class ProfileMenu extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: "queue",
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu icon="labeled" vertical>
                    <Menu.Item name="queue" active={activeItem === "queue"} onClick={this.handleItemClick}>
                        {/* <Label color="teal">1</Label> */}
                        <Icon name="play" />
                        Queue
                    </Menu.Item>

                    <Menu.Item name="spam" active={activeItem === "spam"} onClick={this.handleItemClick}>
                        {/* <Label>51</Label> */}
                        Spam
                    </Menu.Item>

                    <Menu.Item name="updates" active={activeItem === "updates"} onClick={this.handleItemClick}>
                        {/* <Label>1</Label> */}
                        Updates
                    </Menu.Item>
                </Menu>
                <List>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>Semantic UI</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>New York, NY</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" />
                        <List.Content>
                            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkify" />
                        <List.Content>
                            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}
