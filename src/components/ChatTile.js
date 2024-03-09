import { Avatar, Badge, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

const ChatTile = () => {
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
            {/* Message preview text */}
            <Typography component='span' variant='body2' noWrap>
              {'Test preview'}
            </Typography>

            {/* Message preview text */}
            <Typography component='span' variant='body2'>
              {'9999-12-31 23:59:59'}
            </Typography>
          </>
        }
      />
      {true && (
        <Badge color='secondary' variant='dot'>
          <div style={{ width: 10, height: 10}}></div>
        </Badge>
      )}
    </ListItemButton>
  );
}

export default ChatTile;