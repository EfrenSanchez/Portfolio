//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Material
import { ListItemIcon } from '@material-ui/core';

//Icons
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';
import { GithubIcon, TwitterIcon, LinkedinIcon, MediumIcon } from '../SvgIcons/SvgIcons';

//Component
const ListItems = props => {
  return (
    <ListItemIcon >
      {{
        'PersonIcon': (
          <PersonIcon {...props} />
        ),
        'WorkIcon': (
          <WorkIcon {...props} />
        ),
        'MailIcon': (
          <MailIcon {...props} />
        ),
        'CodeIcon': (
          <CodeIcon {...props} />
        ),
        'GithubIcon': (
          <GithubIcon {...props} />
        ),
        'TwitterIcon': (
          <TwitterIcon {...props} />
        ),
        'LinkedinIcon': (
          <LinkedinIcon {...props} />
        ),
        'MediumIcon': (
          <MediumIcon {...props} />
        ),
        default: (
          <CodeIcon {...props} />
        )
      }[props.icon]}
    </ListItemIcon>
  );
}

ListItems.propTypes = {
  icon: PropTypes.string.isRequired,
};


export default ListItems;