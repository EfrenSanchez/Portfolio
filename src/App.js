//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Data
import {works} from './data/data';

//Components 
import Menu from './components/Menu/Menu';
import AboutMe from './components/Content/AboutMe/AboutMe';
import ContactMe from './components/Content/ContactMe/ContactMe';
import Stack from './components/Content/Stack/Stack';
import Works from "./components/Content/Works/Works";
import FullScreenDialog from './components/Dialog/FullScreenDialog';
import Header from './components/Header/Header';

//Material
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

//Styles
const styles = theme => ({
  root: {
    display: 'flex',
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
  appBarDialog: {
    position: 'relative',
  },
  toolbarDialog: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

//Component
class App extends React.Component {

  //State
  state = {
    open: false,
    openDialog: false,
    pageSelected: {"id":"01"},
    projectSelected: {},
  };

  
  //Handlers
  handleMenuOpen = () => {
    this.setState({ open: true });
  };
  
  handleMenuClose = () => {
    this.setState({ open: false });
  };
  
  handlePageSelector = (pageSelected) => {
    this.setState({ pageSelected });
  };
  
  handleDialogOpen = () => {
    this.setState({ openDialog: true });
  };
  
  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };
  
  handlesourceCode = (id) => {
    let found = works.find(function(element) {
      return element.id === id;
    });

    this.setState({ projectSelected : found});
    this.handleDialogOpen();
  };

  //Render method
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline /> 

          {/* Header */}
          <Header 
            handleMenuOpen={this.handleMenuOpen}
            pageSelected={this.state.pageSelected.title}
            open={this.state.open}
            />

          {/* Menu */}
          <Menu
            open={this.state.open}
            handleMenuClose={this.handleMenuClose}
            handlePageSelector={this.handlePageSelector}
          />

          {/* Main */}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {
              this.state.pageSelected.id === "01" ? <AboutMe /> :
              this.state.pageSelected.id === "02" ? <Works handleDialogOpen={this.handlesourceCode}/> :
              this.state.pageSelected.id === "03" ? <ContactMe /> :
              this.state.pageSelected.id === "04" ? <Stack /> :
              <h1>Page not found</h1>
            }
          </main>
        
          {/* Dialog */}
          <FullScreenDialog 
            projectSelected={JSON.parse(JSON.stringify(this.state.projectSelected))}   
            openDialog={this.state.openDialog}
            handleDialogClose={this.handleDialogClose}
            appBarDialog={classes.appBarDialog}
            toolbar={classes.toolbarDialog}
          />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
