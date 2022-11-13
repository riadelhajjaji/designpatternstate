import React, { useEffect } from 'react';
import './App.css';
import Index, { func } from './statePattern';
import { Container, Typography } from '@mui/material';

function App() {
  useEffect(() => {
    func();
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        p: 12,
      }}
    >
      <Typography variant='h4' sx={{ mb: 4 }}>
        Design Pattern State
      </Typography>
      <Index />
    </Container>
  );
}

export default App;
