import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '@mui/material';

const HomePage = () => {

  const { authLogout } = useAuth();

  return (
    <div>
      <Button variant='contained' sx={{ m: 3 }} onClick={authLogout} >
        Sign Out
      </Button>
    </div>
  )
}

export default HomePage