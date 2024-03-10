import { MoreVertRounded } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const ChatHeader = () => {

  const chatTitle = 'Chat Title';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
      <Avatar sx={{ marginRight: 2 }} />
      <Typography variant='h5'>{chatTitle}</Typography>

      <IconButton sx={{marginLeft: 'auto'}}><MoreVertRounded /></IconButton>
    </Box>
  )
}

export default ChatHeader