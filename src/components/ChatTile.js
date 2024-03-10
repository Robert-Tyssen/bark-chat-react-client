import { Avatar, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';

const ChatTile = ({ selected, onSelect, isUnread }) => {

  const messageTitle = 'Test Title that will definitely take more than one line'
  const messagePreview = `
    Test preview with an extra long description that might overflow and/or 
    wrap to another line and cause the layout to be super weird 
    but not sure how it should work`;
  const timestamp = '9999-12-31 23:59:59';

  const fontWeight = isUnread ? 'bold' : 'normal';

  return (
    <ListItemButton onClick={onSelect} selected={selected}>
      { /* Avatar for list tile */}
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>

      {/* List tile text */}
      <ListItemText
        primary={
          <Typography
            fontWeight={fontWeight}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
            }}
          >
            {messageTitle}
          </Typography>
        }
        secondary={
          <>
            {/* Timestamp text */}
            <Typography component='span' variant='caption' fontWeight={fontWeight}>
              {timestamp}
            </Typography>

            {/* Message preview text */}
            <Typography
              component='span'
              variant='body2'
              fontWeight={fontWeight}
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