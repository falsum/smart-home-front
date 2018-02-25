import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui';

import { withRouter } from 'react-router-dom';

const styles = theme => ({
  container: {
    position: 'relative',
  },
  content: {
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
  loaderFixed: {
    //backgroundColor: theme.palette.background.default,
    position: 'fixed',
  },
});

const Loader = props => {
  const { full, mountLoading, children, loading, classes } = props;

  if (!full) {
    return null;
  }

  const loaderClassName = classnames(classes.loader, { [classes.loaderFixed]: full });
  return (
    <div className={classes.container}>
      {(mountLoading || !loading) &&
        <div className={classes.content}>
          {children}
        </div>
      }
      {!!loading &&
        <div className={loaderClassName}>
          <CircularProgress />
        </div>
      }
    </div>
  );
};

export default withRouter(withStyles(styles)(Loader));
