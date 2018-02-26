import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import { Link, matchPath } from 'react-router-dom';

const MenuItemNav = props => {
  const { onClick, children, to } = props;
  const selected = !!matchPath(window.location.pathname, { path: to });
  return (
    <MenuItem onClick={onClick} selected={selected} component={Link} to={to}>{children}</MenuItem>
  );
};

export default MenuItemNav;
