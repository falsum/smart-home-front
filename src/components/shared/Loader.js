import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui';
import { withRouter } from 'react-router-dom';

import { intermediateFlex } from './../../styles';

const styles = () => ({
  container: {
    ...intermediateFlex,
    position: 'relative',
  },
  content: {
    ...intermediateFlex,
    position: 'static',
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loader = props => {
  const { unmount, children, loading, classes } = props;

  return (
    <div className={classes.container}>
      {(!loading || !unmount) &&
        <div className={classes.content}>
          {children}
        </div>
      }
      {!!loading &&
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      }
    </div>
  );
};

export default withRouter(withStyles(styles)(Loader));
