import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Medium(props) {
  return (
    <SvgIcon {...props}>
      <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z" />
    </SvgIcon>
  )
}

const GithubIcon = (props) => {
  return (
    <SvgIcon { ...props}>
      
      <path d="M 4.6582031 4 C 3.6182031 6.431 4.0382031 8.4602656 4.4082031 9.5722656 C 2.9152031 11.172266 2.0019531 13.3765 2.0019531 16.3125 C 2.0019531 23.5795 6.5919531 26 15.001953 26 C 23.411953 26 28.001953 23.5795 28.001953 16.3125 C 28.002953 13.4765 27.036656 11.264766 25.472656 9.6347656 C 25.696656 9.2667656 26.003906 8.5485 26.003906 7.1875 C 26.003906 5.1405 25.316406 4 25.316406 4 C 24.247406 4 21.735203 4.4310469 19.658203 6.4980469 C 18.183203 6.1310469 16.610906 6 15.003906 6 C 13.429906 6 11.888406 6.0862969 10.441406 6.4042969 C 10.348406 6.3182969 7.7612031 4 4.6582031 4 z M 10.005859 13.5 C 11.308859 13.514 13.458906 13.999 15.003906 14 C 16.548906 13.999 18.697 13.514 20 13.5 C 22.522 13.5 24 15.502656 24 17.972656 C 24 22.024656 21.656859 23.999 15.005859 24 L 15.003906 24 L 15 24 C 8.349 23.999 6.0058594 22.024656 6.0058594 17.972656 C 6.0058594 15.502656 7.4838594 13.5 10.005859 13.5 z M 10.5 17 A 1.5 2 0 0 0 9 19 A 1.5 2 0 0 0 10.5 21 A 1.5 2 0 0 0 12 19 A 1.5 2 0 0 0 10.5 17 z M 19.5 17 A 1.5 2 0 0 0 18 19 A 1.5 2 0 0 0 19.5 21 A 1.5 2 0 0 0 21 19 A 1.5 2 0 0 0 19.5 17 z" />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HomeIcon className={classes.icon} />
      <HomeIcon className={classes.icon} color="primary" />
      <HomeIcon className={classes.icon} color="secondary" />
      <Medium className={classes.icon} color="action" />
      <Medium className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
      <Medium color="disabled" className={classes.icon} fontSize="large" />
      <Medium
        className={classes.icon}
        color="primary"
        fontSize="large"
        component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={blue[400]} />
                <stop offset="70%" stopColor={red[400]} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}
      />
    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);
