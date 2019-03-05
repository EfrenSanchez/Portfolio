//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Tooltip } from '@material-ui/core';

//Icon
import CodeIcon from '@material-ui/icons/Code';

//Data
import { works } from '../../../data/data';

const styles = theme => ({
  root: {
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflowX: 'auto',
    }
  },
  gridListTile: {
    margin: '16px',
    height: '70vh !important',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    }
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  titleBar: {
    height: '15% !important',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  title: {
    fontSize: '2rem',
    padding: '10px',
  },
  subtitle: {
    marginLeft: '10px'
  },
  iconButton: {
    color: '#fff',
    marginRight: '20px'
  }
});

function Works(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {works.map(project => (
          <GridListTile  className={classes.gridListTile} key={project.id}>
            <img async src={project.img} alt={project.title} className={classes.img}/>
            <GridListTileBar
              title={project.title}
              subtitle={project.desc}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                subtitle: classes.subtitle
              }}
              actionIcon={
                <Tooltip title="Source Code">
                  <IconButton className={classes.iconButton} onClick={props.handlesourceCode.bind(this, project.id)}> 
                    <CodeIcon  />
                  </IconButton>
                </Tooltip>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Works.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Works);
