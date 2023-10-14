import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');

  const handleSignUp = () => {
    // Create an object with the user data
    const userData = {
      username,
      email,
      password,
      mobileNumber,
      dob,
    };

    // Make an HTTP POST request to the server
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          alert(data.message);
          navigate(`/login`);
          console.log('User registered successfully');


        } else {
          console.error('Failed to register user');
        }
      });

    // Clear the form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setMobileNumber('');
    setDob('');
  };


  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TextField
          label="Mobile Number"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ locale: 'en-GB' }}
          placeholder="dd/mm/yyyy"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default SignUp;
