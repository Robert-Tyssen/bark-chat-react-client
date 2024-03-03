import LoginIcon from '@mui/icons-material/Login';
import { Alert, Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {

  // TODO - handle email and password validations
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO - handle authentication errors
  const { user, loginState, authLoginEmailPassword } = useAuth();

  const handleSubmit = (e) => {
    console.log(`Login with email = ${email}; password = ${password}`);
    authLoginEmailPassword(email, password);
  };

  // Disable login button when loading, or when a field is empty
  const isLoginDisabled = loginState.loading || !email || !password;


  // Navigate to home page if login successful
  if (user?.token) {
    return <Navigate to='/' />
  }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={false}
            />

            <div>
              {loginState.error &&
                <Alert severity='error' sx={{ mt: 3 }}>
                  Login Failed
                </Alert>
              }
            </div>

            {/* Submit Button */}
            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{ mt: 3 }}
              onClick={handleSubmit}
              disabled={loginState.loading}
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
              <Link href='/' >
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