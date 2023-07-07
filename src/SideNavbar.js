import React from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person as PersonIcon, Home as HomeIcon, Work as WorkIcon } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
const SideNavbar = () => {
    return (
      <nav>
        <div className="list-container">
        <List>
            <ListItem button>
              <ListItemIcon>
                <WbCloudyIcon sx={{ fontSize: 40 }} color="primary" />
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
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            DK
          </Avatar>
        </div>
      </nav>
    );
  };
  

export default SideNavbar;
