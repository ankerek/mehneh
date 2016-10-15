import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const Header = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Options" />
      <Badge
        badgeContent={4}
        primary={true}
        badgeStyle={{top: 8, right: 8}}
      >
        <NotificationsIcon />
      </Badge>
    </ToolbarGroup>
  </Toolbar>
)

export default Header;