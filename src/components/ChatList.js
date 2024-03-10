import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ChatTile from './ChatTile';
import { useChat } from '../hooks/useChat';

const ChatList = () => {

  const { selectedChat, selectChat } = useChat();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: 'auto',
      }}
    >

      <Typography variant='h5' sx={{ m: 2 }}>Messages</Typography>

      {/* Scrollable list of chat tiles */}
      <Box sx={{ height: 'auto', overflowY: 'auto' }}>
        {Array.from({ length: 50 }).map(
          (it, index) => <ChatTile onSelect={() => selectChat(index)} selected={selectedChat === index} />
        )}
      </Box>

    </Box>
  )
}

export default ChatList;