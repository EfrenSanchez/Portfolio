//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Components 
import Drawer from '../Drawer/Drawer';
import AboutMe from '../Content/AboutMe/AboutMe';
import ContactMe from '../Content/ContactMe/ContactMe';
import Stack from '../Content/Stack/Stack';
import Works from "../Content/Works/Works";
import FullScreenDialog from '../Dialog/Dialog';

//Material
import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar, 
  CssBaseline, 
  Typography, 
  IconButton, 
} from '@material-ui/core';

//Icons
import MenuIcon from '@material-ui/icons/Menu';

//Styles
const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: 'auto'
  },
});

//Component
class Nav extends React.Component {

  //State
  state = {
    open: false,
    pageSelected: "About me",
    dialog: false,
    projectSelected: '',
  };

  
  //Handlers
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  handlePageSelector = (pageSelected) => {
    this.setState({ pageSelected });
  };
  
  handlesourceCode = (projectSelected) => {
    this.setState({ projectSelected });
    this.setState({ dialog: true });
    console.log(projectSelected);
  }

  //Render method
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline /> 
        {
          this.state.dialog ? <FullScreenDialog /> : null
        }
            {/* AppBar */}
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" color="inherit" noWrap>
                {this.state.pageSelected}
              </Typography>
            </Toolbar>
          </AppBar>

            {/* Drawer */}
          <Drawer
            open={this.state.open}
            handleDrawerClose={this.handleDrawerClose}
            handlePageSelector={this.handlePageSelector}
            pages={this.state.pages}
          />

          {/* Main */}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {
              this.state.pageSelected === "About me" ? <AboutMe /> :
              this.state.pageSelected === "Efren's works" ? <Works handlesourceCode={this.handlesourceCode}/> :
              this.state.pageSelected === "Contact to Efren Sanchez" ? <ContactMe /> :
              this.state.pageSelected === "Efren's stack" ? <Stack /> :
              <h1>Page not found</h1>
            }
          </main>
        
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);
