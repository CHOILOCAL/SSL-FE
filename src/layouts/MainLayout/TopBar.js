import React, {useEffect, useState} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles, Hidden, Drawer, Box, Avatar, Typography, Divider
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NavItem from '../DashboardLayout/NavBar/NavItem';

const user = {
  avatar: '',
  company: '한진정보통신',
  departmentGroup: '사업지원팀 > 거버넌스그룹',
  name: '최현지'
};

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  },
  drawerOpen: {
    width: '83%'
  },
  drawerClose: {
    width: '100%'
  },
  icon: {
    marginRight: '10px'
  },
  mobileDrawer: {
    width: 256
  },
  desktopDrawerClose: {
    width: 256,
    heigth: 'calc(100%)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const TopBar = ({ handleShowPanel, className, open, onMobileClose, openMobile, ...rest }) => {
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
      <AppBar
      className={clsx(classes.root, className, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      elevation={0}
      {...rest}
    >
      <Toolbar className={clsx(classes.toolbar, {
      })}
      >
        <IconButton onClick={handleShowPanel} className={classes.icon}>
          {open === true ? (
            <ChevronLeftIcon />
          ) : (
            <MenuIcon />
          )}
        </IconButton>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
      </AppBar>
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

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
