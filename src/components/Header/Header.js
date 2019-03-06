//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Material
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Tooltip } from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';

//Styles
const menuWidth = 240;
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: menuWidth,
    width: `calc(100% - ${menuWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});

const Header = props => {
  const { classes } = props;

  return(
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar disableGutters={!props.open}>

        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.handleMenuOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <Tooltip title="Menu">
            <MenuIcon />
          </Tooltip>
        </IconButton>

        <Typography variant="h5" color="inherit" noWrap>
          {props.pageSelected}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleMenuOpen: PropTypes.func.isRequired,
  pageSelected: PropTypes.string,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);