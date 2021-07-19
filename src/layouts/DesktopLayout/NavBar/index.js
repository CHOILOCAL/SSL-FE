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
import { desktopLayoutNavBar } from 'src/assets/styles/GlobalStyles';
import NavItem from './NavItem';

const user = {
  avatar: '',
  company: '한진정보통신',
  departmentGroup: '사업지원팀 > 거버넌스그룹',
  name: '최현지'
};

const NavBar = ({ open }) => {
  const classes = desktopLayoutNavBar();

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
          >
            <NavItem />
          </TreeView>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawerClose }}
        open={open}
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {
  className: PropTypes.string
};

export default NavBar;
