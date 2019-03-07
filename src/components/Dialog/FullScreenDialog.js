//Dependecies
import React from 'react';
import PropTypes from 'prop-types';

//Components
import ProjectPage from '../ProjectPages/ProjectPage';

//Material
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Typography, Slide, AppBar, Toolbar, IconButton, Tooltip, Snackbar, Button } from '@material-ui/core';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import { GithubIcon, GlobeIcon } from '../SvgIcons/SvgIcons';

const styles = theme => ({
  container: {
    padding:'20px',
    background: 'rgb(190,215,231)',
    background: 'radial-gradient(circle, rgba(190,215,231,1) 50%, rgba(2,119,176,1) 100%)',
  },
  iframe: {
    height:'90vh', 
    width:'100%',
    borderStyle: 'dotted',
    backgroundColor: '#DCDCDC',
  },
});

//Component
class FullScreenDialog extends React.Component  {
  state = {
    open: true,
  };

  //Transition function
  transition = props => <Slide direction="up" {...props} />;
  
  handleClose = () => {
    this.setState({ open: false });
  };
  
  //Render method
  render() {
    let url = {...this.props.projectSelected.src};
    const { classes } = this.props;
  
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.openDialog}
          onClose={this.props.handleDialogClose}
          TransitionComponent={this.transition}
        >
          <AppBar className={this.props.appBarDialog}>
            <Toolbar className={this.props.toolbar}>
            
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={this.props.handleDialogClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Tooltip>
  
              <div>
                <Typography variant="h6" color="inherit" align="center" gutterBottom>
                  {this.props.projectSelected.title}
                </Typography> 
                <Typography variant="button" color="inherit" align="center">
                  {this.props.projectSelected.stack}
                </Typography>
              </div>
  
              <div>
                <Tooltip title="Web">
                  <IconButton color="inherit" onClick={this.props.handleDialogClose} aria-label="Web">
                    <a href={url.web} target="_blank">
                      <GlobeIcon style={{color: '#fff'}}/>
                    </a>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Repo">
                  <IconButton color="inherit" onClick={this.props.handleDialogClose} aria-label="Github">
                    <a href={url.github} target="_blank">
                      <GithubIcon style={{color: '#fff'}}/>
                    </a>
                  </IconButton>
                </Tooltip>
              </div>
  
            </Toolbar>
          </AppBar>
          {
            url.freeCode 
            ? 
            <div className={classes.container}>
              <ProjectPage projectSelected={this.props.projectSelected}/> 
            </div>
            : 
            <div className={classes.container}>
              <Snackbar
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
                open={this.state.open}
                autoHideDuration={3000}
                onClose={this.handleClose}
                transitionDuration={{ enter: 1000 }}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">It's an iframe, you can interact with it</span>}
                action={
                  <Button color="inherit" size="small" onClick={this.handleClose}>
                    Undo
                  </Button>
                }
              />
              <iframe async={true} src={url.web} className={classes.iframe}> </iframe>
            </div>
          }
        </Dialog>
      </div>
      );

  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  openDialog: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  appBarDialog: PropTypes.string.isRequired,
  toolbar: PropTypes.string.isRequired,
  projectSelected: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullScreenDialog);