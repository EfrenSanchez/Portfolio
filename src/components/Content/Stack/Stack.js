//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

//Components
import { FrontendImg, BackendImg, CloudImg, DesignImg } from '../../SvgIcons/SvgIcons';
import { Typography } from '@material-ui/core';

//Styles 
const primary = lightBlue[800]; // #0277bd

const styles = theme => ({
  section: {
    height: '90vh',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {flexDirection: 'column', flexWrap: 'nowrap', height: 'auto'}
  },
  service: {
    width: '25%',
    textAlign: 'center',
    padding: '0 40px',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {width: '100%' }
  },
  serviceSvg: {
    fill: primary,
    height: '15vh',
    width: '15vw',
  },
  serviceTitle: {
    margin: '20px 0 10px 0',
  },
  span: {
    borderBottom: '1px dotted rgba(0,0,0,.35)',
  },
})

const Stack = (props) => {
  const { classes } = props;
  return (
    <section className={classes.section}>         
      {/* Frontend */}
      <div className={classes.service}>
        <FrontendImg className={classes.serviceSvg}/>
        <Typography variant="h4" color="textSecondary" className={classes.serviceTitle}>Frontend</Typography >
        <Typography paragraph variant="body1" color="textSecondary" className={classes.serviceDesc}>
          Structured <span className={classes.span}>HTML</span> and <span className={classes.span}>CSS</span> along with <span className={classes.span}>Sass</span>.
          <br/><span className={classes.span}>JS</span> ES6 - ESX, ESlint for linting and <span className={classes.span}>Babel</span> for
          transpiling. 
          <br/><span className={classes.span}>React</span> (for building complex UIs), <span className={classes.span}>Redux</span> (for state
          management).
          <br/> <span className={classes.span}>Webpack</span> like module bundler.
        </Typography>
      </div>
      {/* Backend */}
      <div className={classes.service}> 
        <BackendImg className={classes.serviceSvg}/>
        <Typography variant="h4" color="textSecondary" className={classes.serviceTitle}>Backend</Typography >
        <Typography paragraph variant="body1" color="textSecondary" className={classes.serviceDesc}>
          Technologies like <span className={classes.span}>Nodejs</span>, 
            <br/>data query and manipulation language for APIs with <span className={classes.span}>GraphQL</span>.  
            <br/> <span className={classes.span}>Express</span> how web application framework.
            <br/> I use like data base <span className={classes.span}>MongoDB</span> and <span className={classes.span}>mongoose</span> for modeling.
        </Typography>
      </div>
      {/* Cloud */}
      <div className={classes.service}>
        <CloudImg className={classes.serviceSvg}/>
        <Typography variant="h4" color="textSecondary" className={classes.serviceTitle}>Cloud</Typography >
        <Typography paragraph variant="body1" color="textSecondary" className={classes.serviceDesc}>
          Some experience with <span className={classes.span}>Firebase</span>
          <br/>and <span className={classes.span}>Docker</span>.
        </Typography>
      </div>
      {/* Design */}
      <div className={classes.service}>
        <DesignImg className={classes.serviceSvg}/>
        <Typography variant="h4" color="textSecondary" className={classes.serviceTitle}>Web Design</Typography >
        <Typography paragraph variant="body1" color="textSecondary" className={classes.serviceDesc}>
          Lighty knowledge in <span className={classes.span}>UI design</span> and <span className={classes.span}>prototypes</span> design.
          <br/>I handle the tools: Sketch, Figma and Zeplin. 
          <br/>I have created my own <span className={classes.span}>Design System</span> based on the <span className={classes.span}>Atomic design</span> 
              and <span className={classes.span}>BEM</span> to organize all the Scss.
        </Typography>
      </div>
    </section>
  )
}

Stack.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stack);