import React from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person as PersonIcon, Home as HomeIcon, Work as WorkIcon } from '@mui/icons-material';

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
