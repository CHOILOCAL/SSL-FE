import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InputIcon from '@material-ui/icons/Input';

import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {
    opacity: 0.8,
  },
  avatar: {
    width: 60,
    height: 60
  },
  menuButton: {
    marginRight: 36,
  },
  iconMenuBtn: {
    marginRight: 10,
  },
  toobarOpen: {
    width: '83%',
  },
  toobarClose: {
    width: '100%',
  }
}));

function TopBar(props, className, rest, onMobileNavOpen) {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar
      className={clsx(classes.root, className, {
        [classes.toobarOpen]: props.open,
        [classes.toobarClose]: !props,open,
      })}
      elevation={0}
      {...rest}
    >
      <Toolbar className={clsx(classes.toobar, className)}>
        <IconButton onClick={props.handleShowPanel} className={clsx(classes.iconMenuBtn)}>
          {props.open === true ? (
            <MenuIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <RouterLink to="/signup" variant="h6">
          <Hidden mdDown>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Hidden>
        </RouterLink>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
