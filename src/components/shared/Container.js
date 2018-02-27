import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    flex: 1,
    padding: theme.spacing.unit,
  },
});

const Container = props => {
  const { children, classes } = props;
  return (
    <div className={classes.container}>
      <Grid container justify="center">
        <Grid item lg={8} md={10} sm={12} xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Container);
