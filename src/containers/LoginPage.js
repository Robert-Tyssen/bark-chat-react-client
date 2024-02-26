import LoginIcon from '@mui/icons-material/Login';
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const LoginPage = () => {
  return (
    <Grid container component='main' sx={{ height: '100vh' }} direction={'row'}>
      {/* Side container with decoration */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          backgroundColor: (t) => t.palette.grey[50]
        }}
      />
      {/* Login form */}
      <Grid
        item
        xs={12} sm={8} md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        <Box
          sx={{
            mx: 4,
            my: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '500px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography variant='h5'>Login</Typography>

          <Box component='form' noValidate sx={{ mt: 1 }} >
            {/* Email text field */}
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              error={false}
            />

            {/* Password text field */}
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              autoComplete='current-password'
              error={false}
            />

            {/* Submit Button */}
            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3 }}
            >
              Login
            </Button>

            {/* Create Account Button */}
            <Button
              type='button'
              fullWidth
              variant='outlined'
              sx={{ mt: 2 }}
            >
              {"Don't have an account? Sign Up"}
            </Button>

            {/* Forgot password link */}
            <Typography textAlign={'center'} sx={{ mt: 3 }}>
              <Link href='#' >
                Forgot Password
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid >
  )
}

export default LoginPage