import { Box, Button, Container, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import Context from './Context';

export const func = () => {
  const ctx = new Context();
  console.log(ctx);
};

const Index = () => {
  const [context, setContext] = useState(null);
  const [screenColor, setScreenColor] = useState('red');
  const pushHandler = () => {
    console.log('Before push(): color = ' + context.getState().getColor());
    context.push();
    setScreenColor(context.getState().getColor());
    console.log('After push(): color = ' + context.getState().getColor());
  };
  const pullHandler = () => {
    console.log('Before pull(): color = ' + context.getState().getColor());
    context.pull();
    setScreenColor(context.getState().getColor());
    console.log('After pull(): color = ' + context.getState().getColor());
  };
  useEffect(() => {
    setContext(new Context());
  }, []);
  return (
    <Container sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', gap: 3, p: 2 }}>
        <Button variant='contained' onClick={pullHandler}>
          pull
        </Button>
        <Button variant='contained' onClick={pushHandler}>
          push
        </Button>
      </Box>
      <Paper
        sx={{ backgroundColor: screenColor, width: '100%', height: 500 }}
      ></Paper>
    </Container>
  );
};

export default Index;
