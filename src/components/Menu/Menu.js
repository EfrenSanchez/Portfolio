//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Data
import data from '../../data/data';

//Components
import ListItems from '../List/ListItems';

//Material
import { withStyles } from '@material-ui/core/styles';
import { 
  Drawer,
  List, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemText,
  Typography
} from '@material-ui/core';

//Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//Styles 
const drawerWidth = 240;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menu: {
    width: '100%'
  }
})

//Component
const Menu = (props) => {
    const { classes, theme } = props;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          }),
        }}
        open={props.open}
        >
        <div className={classes.toolbar}>
        <Typography className={classes.menu} variant="subtitle1" align="center">Menu</Typography>
          <IconButton onClick={props.handleMenuClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* PagesList */}
        <List>
          {data.pages.map(page => {
            return(
            <ListItem button key={page.id} onClick={props.handlePageSelector.bind(this, page.title)}> 
              <ListItems icon={page.icon} color="action"/>
              <ListItemText primary={page.name} />
            </ListItem>)
          })}
        </List>
        <Divider />
        {/* SocialList */}
        <List>
          {data.socialMedia.map(page => (
            <a 
              key={page.id}
              href={page.src}
              target="_blank"
              style={{textDecoration: 'none'}} 
            >
              <ListItem button>
                <ListItems icon={page.icon} color="action"/>
                <ListItemText primary={page.name} />
              </ListItem>
            </a>
          ))}
        </List>
        
      </Drawer>
    )
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  handlePageSelector: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);