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
    <Box sx={{ display: 'flex', height: '100vh', }}>
      <Drawer
        variant='permanent'
        anchor='left'
        sx={{
          width: drawerWidth,
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


      <Box sx={{ display: 'flex', height: '100vh', width: '100vw'}}>
        {/* Conversation List */}

        <div style={{ minWidth: 250, flex: 1, }}>
          <ChatList />
        </div>

        {/* Main window */}
        <div style={{width: 'auto', minWidth: 'xs', flex: 2}}>
          <ChatWindow />
        </div>

      </Box>

    </Box >
  )
}

export default HomePage