import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import AccountCircle from 'material-ui-icons/AccountCircle';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link, withRouter } from 'react-router-dom';

import MenuItemNav from './shared/MenuItemNav';

import { loginApi, profileStorePack } from 'smart-home-store';

const styles = {
  title: {
    flex: 1,
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MainBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleLogout() {
    const { invalidateProfile } = this.props;
    this.handleClose();
    loginApi.logout().then(invalidateProfile);
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.title} component={Link} to="/">
            Smart Home
          </Typography>
          <div>
            <IconButton onClick={this.handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              MenuListProps={{ component: 'div' }}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItemNav onClick={this.handleClose} to="/profile">Profile</MenuItemNav>
              <MenuItem onClick={this.handleLogout} component="span">Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  invalidateProfile: () => dispatch(profileStorePack.actionInvalidate()),
});

export default withRouter(withStyles(styles)(connect(null, mapDispatchToProps)(MainBar)));
