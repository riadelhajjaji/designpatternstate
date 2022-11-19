import React, { useEffect } from 'react';
import './App.css';
import Index, { func } from './statePattern';
import { Container, Typography } from '@mui/material';
import INPTLOGO from './Logo_inpt.png';
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
      <Typography
        variant='h6'
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        SUD CLOUD INE2
        <img src={INPTLOGO} width={240} alt='logo' />
      </Typography>

      <Typography
        variant='h4'
        sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}
      >
        Design Pattern State
      </Typography>
      <Index />
      <Container sx={{ border: '1px solid #000', p: 3, mt: 4 }}>
        <Typography variant='h5'>réalisé par :</Typography>
        <Typography variant='body1'> Riad El Hajjaji</Typography>

        <Typography variant='body1'>Asmae El Azrak</Typography>
      </Container>
    </Container>
  );
}

export default App;
