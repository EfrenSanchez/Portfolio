//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Data
import { skills } from "../../../data/data";

//Material
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';


//Styles 
const primary = lightBlue[800]; // #0277bd
const PrimaryLight = lightBlue[300]; //#4fc3f7
const PrimaryDark = lightBlue[900]; //#01579b

const styles = theme => ({
  section: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {flexDirection: 'column'}
  },
  aboutLeft: {
    width: '35%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '30%'
    }
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  aboutRight: {
    flex: 1,
    height: '100%',
    overflow: 'auto',
    backgroundColor: '#fff'
  },
  bio: {
    padding: '40px'
  },
  bioTitle: {
    margin: '0 0 6px 0',
    color: primary,
  },
  bioSubtitle: {
    margin: '0 0 15px 0',
  },
  bioText: {
    margin: '20px 0 30px 0'
  },
  skill: {
    marginTop: '10px',
  },
  skillTitle: {
    marginBottom: '5px'
  },
  progress: {
    width: '80%',
    border: '1px solid #ddd',
    height: '16px',
    borderRadius: '30px',
    padding: '4px',
  },
  progressBar: {
    background: `linear-gradient(to right, ${PrimaryLight} 0%, ${PrimaryDark} 100%)`,
    height: '100%',
    width: '100%',
    borderRadius: '30px',
  },
})

const AboutMe = (props) => {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <div className={classes.aboutLeft}>
        <img 
        className={classes.img}
        src="./assets/efren.jpg" 
        srcSet="./assets/efren.jpg, ./assets/efren@2x.jpg 2x"
        alt="Photo of me" 
        />
      </div>

      <div className={classes.aboutRight}>
        <div className={classes.bio}>
          <Typography variant="h2" className={classes.bioTitle}>Efren Sanchez</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.bioSubtitle}>JUNIOR FULLSTACK</Typography>
          <Typography variant="body1" className={classes.bioText}> 
            Hello, I am a Junior fullstack developer.
            <br/> 
            Born in Spain, Programmer by passion.  
            <br/>
            I'm interested in the entire web production process, from server logic to HTML layout. 
            <br/>
            <br/>
            I use React and Redux on the front-end and Nodejs and Express on the back-end,
            but never miss an opportunity to learn a new language or framework. 
            <br/>
            I also really like the design and UX, always trying to practice something.
          </Typography>

          {
            skills.map(skill => {
              return (
                <div key={skill.name} className={classes.skill}>
                  <Typography className={classes.skillTitle}>{skill.name}</Typography>
                  <div className={classes.progress}>
                    <div className={classes.progressBar} style={{width: skill.progress}}></div>
                  </div>
                </div> 
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutMe);