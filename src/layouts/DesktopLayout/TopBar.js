import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Hidden,
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { desktopLayoutTopbar } from 'src/assets/styles/globalStyles';
import AccountBtn from 'src/components/AccountBtn';
import NavItem from './NavBar/NavItem';
import NavBar from './NavBar';

const user = {
  avatar: '',
  company: '한진정보통신',
  departmentGroup: '사업지원팀 > 거버넌스그룹',
  name: '최현지'
};

const TopBar = ({
  handleShowPanel,
  className,
  open,
  onMobileClose,
  openMobile,
  ...rest
}) => {
  const classes = desktopLayoutTopbar();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  return (
    <>
      <AppBar
        className={clsx(classes.root, className, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        elevation={0}
        {...rest}
      >
        <Toolbar className={clsx(classes.toolbar, {})}>
          <IconButton onClick={handleShowPanel} className={classes.icon}>
            {open === true ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <RouterLink to="/" className={classes.buttonGrp}>
            <AccountBtn />
          </RouterLink>
        </Toolbar>
      </AppBar>
      {/* Navbar */}
      <NavBar open={open} />
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
