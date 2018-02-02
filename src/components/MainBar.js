import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
} from 'material-ui';
import { Menu as MenuIcon } from 'material-ui-icons';

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MainBar = props => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Smart Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(MainBar);
