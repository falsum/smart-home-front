import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import Container from './shared/Container';

const PageHome = () => (
  <Container>
    <Paper>
      <Typography variant="headline">Home</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Paper>
  </Container>
);

export default PageHome;
