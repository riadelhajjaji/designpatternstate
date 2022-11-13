// 	// GUI attributes.
// 	// private Button pushButton = new Button("Push Operation");
// 	// private Button pullButton = new Button("Pull Operation");
// 	// private Button exitButton = new Button("Exit");
// 	// private TextArea textArea = new TextArea();

import { Box, Button, ButtonGroup, Container, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import Context from './Context';

// 	// The Context.
// 	const context  = null;

// 	 TestState() {
// 		super("State Pattern");
// 		context = new Context();
// 		setupWindow();
// 		// textArea.setBackground (Color.red);
// 		// textArea.setSize (200, 100);
// 	}

// 	private void setupWindow() { // Setup GUI
// 		textArea.setBackground(Color.red);
// 		textArea.setSize(200, 100);
// 		pushButton.setForeground(Color.black);
// 		pullButton.setForeground(Color.black);
// 		exitButton.setForeground(Color.black);
// 		this.setLayout(new FlowLayout());
// 		this.add(pushButton);
// 		this.add(pullButton);
// 		this.add(exitButton);
// 		this.add(textArea);
// 		pushButton.addActionListener(this);
// 		pullButton.addActionListener(this);
// 		exitButton.addActionListener(this);
// 	}

// 	// Handle GUI actions.
// 	public void actionPerformed(@SuppressWarnings("exports") ActionEvent event) {
// 		Object src = event.getSource();
// 		if (src == pushButton) {
// 			System.out.println("Before push(): color = " + context.getState().getColor());
// 			context.push();
// 			textArea.setBackground(context.getState().getColor());
// 			System.out.println("After push(): color = " + context.getState().getColor());
// 		} else if (src == pullButton) {
// 			context.pull();
// 			textArea.setBackground(context.getState().getColor());
// 		} else if (src == exitButton) {
// 			System.exit(0);
// 		}
// 	}

// 	// Main method.
// 	public static void main(String[] argv) {
// 		TestState gui = new TestState();
// 		gui.setSize(450, 250);
// 		gui.setVisible(true);
// 	} // end main()
// }
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
      <Box>
        <Button variant='contained' onClick={pullHandler}>
          pull
        </Button>
        <Button variant='contained' onClick={pushHandler}>
          push
        </Button>
      </Box>
      <Paper
        sx={{ backgroundColor: screenColor, width: 500, height: 500 }}
      ></Paper>
    </Container>
  );
};

export default Index;
