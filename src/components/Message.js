import { Avatar, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const Message = ({ isCurrentUser }) => {

  // Display RTL for current user's messages, and LTR for other users
  const flexDir = isCurrentUser ? 'row-reverse' : 'row';

  // TODO - replace placeholder message with input parameter
  const message = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `
  // Background color for current user's messages, and neutral for other users
  const backgroundColor = isCurrentUser ? 'primary.main' : grey[100];
  const textColor = isCurrentUser ? 'primary.contrastText' : 'text.primary';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: flexDir,
        alignItems: 'flex-end',
        marginBottom: 2,
      }}
    >

      {/* Only display avatar for other users */}
      {!isCurrentUser && <Avatar sx={{ width: 32, height: 32, marginInlineEnd: 2 }} />}

      {/* Message bubble */}
      <Box
        sx={{
          display: 'flex',
          bgcolor: backgroundColor,
          color: textColor,
          padding: 2,
          borderRadius: 8,
          width: 'auto',
          maxWidth: 'sm'
        }}
      >
        <Typography variant='body1'>{message}</Typography>
      </Box>
    </Box>
  )
}

export default Message;