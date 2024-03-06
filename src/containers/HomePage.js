import { ChatBubbleOutlineRounded, LogoutRounded, PeopleRounded, SettingsRounded } from '@mui/icons-material';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import { useAuth } from '../hooks/useAuth';
import ChatContents from '../components/ChatContents';

const drawerWidth = 300;

const HomePage = () => {

  const { authLogout } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexShrink: 0, height: '100vh' }}>
      <Drawer
        variant='permanent'
        anchor='left'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Box overflow={'auto'}>
          <Toolbar>
            <Typography variant='h5'>ADD LOGO</Typography>
          </Toolbar>
          <List>

            <ListItemButton>
              <ListItemIcon><ChatBubbleOutlineRounded /></ListItemIcon>
              <ListItemText primary={'Messages'} selected />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><PeopleRounded /></ListItemIcon>
              <ListItemText primary={'Contacts'} selected />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><SettingsRounded /></ListItemIcon>
              <ListItemText primary={'Settings'} selected />
            </ListItemButton>

            <ListItemButton onClick={authLogout}>
              <ListItemIcon><LogoutRounded /></ListItemIcon>
              <ListItemText primary={'Sign Out'} selected />
            </ListItemButton>

          </List>
        </Box>
      </Drawer>


      <Box sx={{ display: 'flex', height: '100vh', width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
        {/* Conversation List */}
        <Box sx={{ width: 500 }} >
          <ChatList />
        </Box>

        {/* Main window */}
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <ChatWindow />
        </Box>

      </Box>

    </Box >
  )
}

export default HomePage