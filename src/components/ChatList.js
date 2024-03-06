import { Paper, Typography } from '@mui/material'
import React from 'react'

const ChatList = () => {
  return (
    <Paper variant='outlined' sx={{ height: '100%' }}>
      <Typography variant='h5' sx={{ m: 2 }}>Messages</Typography>
    </Paper>
  )
}

export default ChatList;