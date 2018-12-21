import * as React from "react";
import { Menu, Icon } from "semantic-ui-react";

export const BottomNav: React.SFC = () => {
  return (
    <div style={{ bottom: "0", position: "fixed", width: "100%" }}>
      <Menu
        icon="labeled"
        borderless
        widths={3}
        style={{
          flexShrink: 0, //don't allow flexbox to shrink it
          borderRadius: 0, //clear semantic-ui style
          margin: 0 //clear semantic-ui style
        }}
      >
        <Menu.Item to="/home/" link>
          <a href="/home">
            <Icon name="home" />
            Home
          </a>
        </Menu.Item>
        <Menu.Item to="/explore/" link>
          <a href="/explore">
            <Icon name="wpexplorer" />
            Explore
          </a>
        </Menu.Item>
        <Menu.Item to="/profile/" link>
          <a href="/profile">
            <Icon name="user" />
            Profile
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};
