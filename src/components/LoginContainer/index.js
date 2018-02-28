import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileStorePack } from 'smart-home-store';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import LoginForm from './LoginForm';
import Loader from './../shared/Loader';

import { intermediateFlex } from './../../styles';

const styles = () => ({
  container: intermediateFlex,
  containerLogin: {
    flex: 1,
  },
});

class LoginContainer extends Component {
  componentDidMount() {
    const { loadProfile } = this.props;
    loadProfile();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.didInvalidate && this.props.didInvalidate) {
      this.props.loadProfile();
    }
  }

  render() {
    const { children, notAuthenticated, loading, classes } = this.props;

    if (notAuthenticated) {
      return (
        <div className={classes.containerLogin}>
          <Grid container justify="center">
            <Grid item md={4} sm={6} xs={12}>
              <LoginForm />
            </Grid>
          </Grid>
        </div>
      );
    }

    return (
      <Loader loading={loading} unmount>
        {children}
      </Loader>
    );
  }
}

const mapStateToProps = state => {
  const profileStore = state[profileStorePack.name];
  const loading = !profileStore.data;
  const { didInvalidate, error } = profileStore;
  const notAuthenticated = profileStore.error && profileStore.error.status === 401;
  return {
    loading,
    notAuthenticated,
    didInvalidate,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(profileStorePack.actionFetchIfNeeded()),
});

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginContainer)));
