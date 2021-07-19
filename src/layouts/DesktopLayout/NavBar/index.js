import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeView from '@material-ui/lab/TreeView';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import NavItem from './NavItem';

const user = {
  avatar: '',
  company: '한진',
  departmentGroup: '사업지원팀 > 거버넌스그룹',
  name: '최현지'
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawerOpen: {
    width: 256,
    // top: 64,
    height: 'calc(100%)'
    // height: 'calc(100% - 64px)'
  },
  desktopDrawerClose: {
    width: 0,
    heigth: 'calc(100%)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <>
      <Box marginTop="30%" height="100%" display="flex" flexDirection="column">
        <Box alignItems="center" display="flex" flexDirection="column" p={2}>
          <Avatar
            className={classes.avatar}
            component={RouterLink}
            src={user.avatar}
            to="/app/account"
          />
          <Typography className={classes.name} color="textPrimary" variant="h5">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.company}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.departmentGroup}
          </Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            // expanded={props.expanded}
            // selected={props.selected}
            // onNodeToggle={props.handleToggle}
            // onNodeSelect={props.handleSelect}
          >
            <NavItem />
          </TreeView>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawerClose }}
          open={open}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

// NavBar.propTypes = {
//   onMobileClose: PropTypes.func,
//   openMobile: PropTypes.bool
// };
//
// NavBar.defaultProps = {
//   onMobileClose: () => {},
//   openMobile: false
// };

export default NavBar;
