import { ChatBubbleOutlineRounded, LogoutRounded, PeopleRounded, SettingsRounded } from '@mui/icons-material';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useAuth } from '../hooks/useAuth';

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


      <Box sx={{ display: 'flex', height: '100vh', width: '100%', p: 4, boxSizing: 'border-box', overflow: 'hidden' }}>
        {/* Conversation List */}
        <Box sx={{ width: 500 }} >
          <Paper variant='outlined' sx={{ height: '100%', borderRadius: 8, bgcolor: grey[50] }}>
            <Typography variant='h5' sx={{ m: 2 }}>Messages</Typography>
          </Paper>
        </Box>

        <Box sx={{ width: '2rem' }} />

        {/* Main window */}
        <Box sx={{ width: '100%' }}>
          <Paper variant='outlined' sx={{ height: '100%', borderRadius: 8, bgcolor: grey[50] }}>
            <Typography variant='h5' sx={{ m: 2 }}>Main Window</Typography>
          </Paper>
        </Box>

      </Box>

    </Box >
  )
}

export default HomePage