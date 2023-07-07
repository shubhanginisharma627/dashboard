import React from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Person as PersonIcon, Home as HomeIcon, Work as WorkIcon } from '@material-ui/icons';

const SideNavbar = () => {
  return (
    <nav>
      <div className="profile-icon">
        <Avatar>
          <PersonIcon />
        </Avatar>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
        {/* Add more menu items */}
      </List>
    </nav>
  );
};

export default SideNavbar;
