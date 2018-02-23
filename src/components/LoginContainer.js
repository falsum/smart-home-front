import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileStorePack } from 'smart-home-store';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadProfile } = this.props;
    loadProfile();
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(profileStorePack.actionFetchIfNeeded()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
