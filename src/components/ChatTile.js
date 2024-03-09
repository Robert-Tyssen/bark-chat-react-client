import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';

const ChatTile = () => {

  const messagePreview = 'Test preview with an extra long description that might overflow and/or wrap to another line and cause the layout to be super weird but not sure how it should work';
  const timestamp = '9999-12-31 23:59:59';

  return (
    <ListItemButton selected>
      { /* Avatar for list tile */}
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>

      {/* List tile text */}
      <ListItemText
        primary={'Test title'}
        secondary={
          <>
            {/* Timestamp text */}
            <Typography component='span' variant='caption'>
              {timestamp}
            </Typography>

            {/* Message preview text */}
            <Typography
              component='span'
              variant='body2'
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              {messagePreview}
            </Typography>


          </>
        }
      />
    </ListItemButton>
  );
}

export default ChatTile;