import { SendRounded } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

const ChatMessageBar = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: grey[50], boxSizing: 'border-box', p: 2, alignItems: 'center' }}>
      {/* Message Input */}
      <TextField fullWidth multiline maxRows={8} label='Message' />

      {/* Send Button */}
      <IconButton edge="end" size='large' color='primary' sx={{ m: 1 }}><SendRounded /></IconButton>

    </Box>
  );
}

export default ChatMessageBar