import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react'

const ChatMessageBar = () => {
  return (
    <Box sx={{backgroundColor: grey[50], boxSizing: 'border-box' , p: 4}}>
      <Typography>Chat Message Bar</Typography>
    </Box>
  );
}

export default ChatMessageBar