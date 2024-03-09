import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const ChatContents = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: grey[100],
        boxSizing: 'border-box',
        p: 2,
        height: 'auto',
        width: 'auto',
        flex: 1,
        overflowY: 'auto',
      }}
    >
      {
        Array.from({ length: 25 }).map((it, index) => <Typography>Chat Content</Typography>)
      }

    </Box>
  )
}

export default ChatContents