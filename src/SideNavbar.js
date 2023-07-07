import React from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person as PersonIcon, Home as HomeIcon, Work as WorkIcon } from '@mui/icons-material';

const SideNavbar = () => {
    return (
      <nav>
        <div className="list-container">
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
            
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
            
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
            
            </ListItem>
          </List>
        </div>
        <div className="profile-icon">
          <Avatar>
            <PersonIcon />
          </Avatar>
        </div>
      </nav>
    );
  };
  

export default SideNavbar;
