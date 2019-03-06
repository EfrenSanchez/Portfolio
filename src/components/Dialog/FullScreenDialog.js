//Dependecies
import React from 'react';
import PropTypes from 'prop-types';

//Components
import ProjectPage from '../ProjectPages/ProjectPage';

//Material
import { Dialog, Typography, Slide, AppBar, Toolbar, IconButton, Tooltip } from '@material-ui/core';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import { GithubIcon } from '../SvgIcons/SvgIcons';

//Transition function
const Transition = props => <Slide direction="up" {...props} />;

//Component
const FullScreenDialog = props => {
  let url = {...props.projectSelected.src};

  return (
    <div>
      <Dialog
        fullScreen
        open={props.openDialog}
        onClose={props.handleDialogClose}
        TransitionComponent={Transition}
      >
        <AppBar className={props.appBarDialog}>
          <Toolbar className={props.toolbar}>
          
          <Tooltip title="Close">
            <IconButton color="inherit" onClick={props.handleDialogClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Tooltip>

            <Typography variant="h6" color="inherit" >
              {props.projectSelected.title}
            </Typography> 

            <Tooltip title="Repo">
              <IconButton color="inherit" onClick={props.handleDialogClose} aria-label="Github">
                <a href={url.github} target="_blank">
                  <GithubIcon style={{color: '#fff'}}/>
                </a>
              </IconButton>
            </Tooltip>

          </Toolbar>
        </AppBar>
        {/* Content */}

        <ProjectPage projectSelected={props.projectSelected}/>

      </Dialog>
    </div>
    );
}

FullScreenDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  appBarDialog: PropTypes.string.isRequired,
  toolbar: PropTypes.string.isRequired,
  projectSelected: PropTypes.object.isRequired
};

export default FullScreenDialog;