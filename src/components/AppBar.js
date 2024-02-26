import React from 'react'
import { Box, AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const AppBar = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <MuiAppBar position='static' component='header'>
          <Toolbar>
            <Typography variant='h6'>
              Test
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </Box>
    </div>
  )
}

export default AppBar