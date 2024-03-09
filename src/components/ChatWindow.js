import { Box, Paper } from '@mui/material';
import React from 'react';
import ChatContents from './ChatContents';
import ChatHeader from './ChatHeader';
import ChatMessageBar from './ChatMessageBar';

const ChatWindow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <ChatHeader />

      <ChatContents />

      <ChatMessageBar />

    </Box>
  )
}

export default ChatWindow;