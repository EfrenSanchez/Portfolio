//Dependencies
import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import PropTypes from 'prop-types';

//Material
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';

//Styles
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  iframe: {
    height: '50vh',
    width: '100%',
    overflow: 'scroll',
    [theme.breakpoints.down('sm')]: {width: '100vw'}
  },
  typography: {
    backgroundColor: '#5A6266',
    padding: '8px',
    textAlign: 'center',
    color: '#fff !important'
  },
});

class ProjectPage extends React.Component {
  render() {
    let githubUrl = this.props.projectSelected.src.github;
    let htmlUrl = this.props.projectSelected.src.html;
    let jsUrl = this.props.projectSelected.src.js;
    let styleslUrl = this.props.projectSelected.src.styles;

    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <Grid container spacing={8}>

        <Grid item md={6} sm={12}>
          <Paper> 
            <Typography variant="h3" className={classes.typography} >Porject</Typography>
            <img src={this.props.projectSelected.img} className={classes.iframe} />
          </Paper>
        </Grid>

        <Grid item md={6} sm={12}>
          <Paper>           
            <Typography variant="h3" className={classes.typography}>HTML</Typography>
            {/* gist=":USERNAME/:GIST_ID" */}
              {/* TODO: loadingClass */}
            <ReactEmbedGist gist={htmlUrl} loadingClass="" wrapperClass={classes.iframe} />
          </Paper>
        </Grid>

        <Grid item md={6} sm={12}>
          <Paper> 
            <Typography variant="h3" className={classes.typography}>Styles</Typography>
            <ReactEmbedGist gist={jsUrl} loadingClass="" wrapperClass={classes.iframe} />
          </Paper>
        </Grid>

        <Grid item md={6} sm={12}>
          <Paper> 
            <Typography variant="h3" className={classes.typography}>JavaScript</Typography>
            <ReactEmbedGist gist={styleslUrl} loadingClass="" wrapperClass={classes.iframe} />
          </Paper>
        </Grid>
      </Grid>
    </div>









    //   <div className="container">
      
    //   <div className="shop--wrapper shop--wrapper_project">
    //     
    //   </div>

    //   <div className="shop--wrapper shop--wrapper_html">
    //   </div>
    //   <div className="shop--wrapper shop--wrapper_css">
    //   </div>
    //   <div className="shop--wrapper shop--wrapper_js">
    //     
    //   </div>

    // </div>
    );
  }
}

ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProjectPage);