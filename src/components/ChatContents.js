import { Box } from '@mui/material';
import React from 'react';
import Message from './Message';

const ChatContents = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        p: 2,
        height: 'auto',
        width: 'auto',
        flex: 1,
        overflowY: 'auto',
      }}
    >
      {Array.from({ length: 25 }).map(
        (it, index) => <Message isCurrentUser={index % 3 == 0} />)
      }
    </Box>
  )
}

export default ChatContents