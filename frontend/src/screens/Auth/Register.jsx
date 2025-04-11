import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = (props) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Registering user:', formData);
    // Add registration logic (API call, Firebase, etc.)
  };

  const handelLoginPage = ()=>{
    props.setLoginPage(true)
  }
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={3} textAlign="center">
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            margin="normal"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            required
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Retype Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            error={
              formData.confirmPassword.length > 0 &&
              formData.password !== formData.confirmPassword
            }
            helperText={
              formData.confirmPassword.length > 0 &&
              formData.password !== formData.confirmPassword
                ? 'Passwords do not match'
                : ''
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    edge="end"
                    aria-label="toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
        <Typography variant="h8" mb={3} textAlign="center">
                  Already a user?
                  <Button onClick={handelLoginPage}>Login Now</Button>
                </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
