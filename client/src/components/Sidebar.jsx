import { Box, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 'auto',
  marginRight: '16px',
});

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can implement the logic for toggling dark mode here
  };

  return (
    <Box flex={1} p={2} sx={{
        display: {
            xs: "none",
            sm: "block"
        }
    }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <HomeIcon/>
            </StyledListItemIcon>
            <ListItemText primary='Homepage'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <AccountTreeRoundedIcon/>
            </StyledListItemIcon>
            <ListItemText primary='Projects'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <EventIcon/>
            </StyledListItemIcon>
            <ListItemText primary='Events'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <GroupsRoundedIcon/>
            </StyledListItemIcon>
            <ListItemText primary='clubs'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <PeopleAltIcon/>
            </StyledListItemIcon>
            <ListItemText primary='Alumni'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#' >
            <StyledListItemIcon>
              <SettingsIcon/>
            </StyledListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDarkMode}>
            <StyledListItemIcon>
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </StyledListItemIcon>
            <ListItemText primary={darkMode ? 'Light' : 'Dark'} />
            <Switch checked={darkMode} onChange={toggleDarkMode} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar;
