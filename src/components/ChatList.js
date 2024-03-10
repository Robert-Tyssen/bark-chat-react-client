import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useChatList } from '../hooks/useChatList';
import ChatTile from './ChatTile';

const ChatList = () => {

  const { chats, selectedChat, selectChat, loadPage, loading, hasMore } = useChatList();

  useEffect(() => {
    loadPage();
  }, []);

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
        {chats.map((it, index) =>
          <ChatTile
            key={index}
            onSelect={() => selectChat(index.toString())}
            selected={selectedChat === index.toString()}
          />
        )}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: 100}}>
          {loading
            ? <CircularProgress />
            : hasMore && <Button
              variant='outlined'
              onClick={loadPage}
              sx={{ margin: 2 }}
            >
              Load More
            </Button>
          }

        </div>
      </Box>

    </Box>
  )
}

export default ChatList;