//Dependencies
import React from 'react';

//Components
import { MediumIcon, GithubIcon, TwitterIcon, LinkedinIcon } from "../../SvgIcons/SvgIcons";

//Data
import { socialMedia } from "../../../data/data";

//Material
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//Styles
const styles = theme => ({
  section: {
    height: '90vh',
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  },
  contactContent: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  contactBody: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: '200px',
    overflow: 'hidden',
    display: 'inline-block',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  contactEmail: {
    padding: '10px 20px',
    border: '2px solid #ddd',
    cursor: 'pointer',
    color: 'rgba(0,0,0,.3)',
    textDecoration: 'none',
    marginBottom: '10px'
  },
  bioSubtitle: {
    margin: '0 0 15px 0',
  },
  contactFooter: {
    backgroundColor: '#757f83',
    padding: '15px 5px 15px 5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'normal',
    marginTop: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      height: '25%'
    }
  },
  footerEmail: {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  socialMedia: {
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mapResponsive: {
    overflow: 'hidden',
    width: '50%',
    height: '100%',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,.1)',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  mapFrame: {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    border: 0,
  }
})

const ContactMe = (props) => {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <div className={classes.contactContent}>
        <div className={classes.contactBody}>
          <span className={classes.avatar} >
            <img 
              className={classes.avatarImg}
              src="./assets/bird_ef.png" 
              srcSet="./assets/bird_ef.png, ./assets/bird_ef@2x.png 2x"
              alt="logo bird"
              />
          </span>
          <Typography variant="subtitle1" color="textSecondary" className={classes.bioSubtitle}>JUNIOR FULLSTACK</Typography>
          <a 
            className={classes.contactEmail} 
            href="https://docs.google.com/document/d/1u_0OQrIcHZLfWAD9Cu_cREmOH16HxDlU-WIf530t738/edit?usp=sharing"
            target="_blank"
          >Let's work together</a>
        </div>
        <div className={classes.contactFooter}>
          <a 
            style={{color: '#fff', textDecoration: 'none'}}
            href="mailto:efren.sanchezgon@gmail.com?Subject=Hello%20Efren" 
            target="_top"
          >efren.sanchezgon@gmail.com</a>
          <div className={classes.socialMedia}>
            {
              socialMedia.map( link => {
                return(
                  <a key={link.id} target="_blank" href={link.src} className={classes.socialMediaLink}>
                    {(
                    link.id === "01" ? <GithubIcon style={{color: '#fff'}} /> : 
                    link.id === "02" ? <TwitterIcon style={{color: '#fff'}} /> : 
                    link.id === "03" ? <LinkedinIcon style={{color: '#fff'}} /> : 
                    link.id === "04" ? <MediumIcon style={{color: '#fff'}} /> :
                    null
                  )}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className={classes.mapResponsive}>
        <iframe 
          async
          src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=Palmones%2C%20Spain+(Palmones)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
          className={classes.mapFrame}
          width="600"
          height="450"
          frameBorder="0"
          style={{border:0}}
          allowFullScreen
          >
        </iframe>
      </div>
    </section>
  )
}


export default withStyles(styles)(ContactMe);