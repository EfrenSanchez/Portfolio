//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material
import { withStyles } from '@material-ui/core/styles';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Slide } from '@material-ui/core/Dialog';

//Icon 
import CloseIcon from '@material-ui/icons/Close';
import {GithubIcon} from '../SvgIcons/SvgIcons';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

const Transition = props => <Slide direction="up" {...props} />;

class FullScreenDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {props.title}
              </Typography>
              <IconButton onClick={this.handleClose}>
                <GithubIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {/* Content */}
         
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
