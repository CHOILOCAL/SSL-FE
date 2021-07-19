import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from '../MobileLayout/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapperOpen: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  wrapperClose: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DesktopLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleShowPanel = () => {
    console.log(open);
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <TopBar
        open={open}
        handleShowPanel={handleShowPanel}
        onMobileNavOpen={() => setMobileNavOpen(true)}
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div
        className={clsx(classes.wrapperOpen, {
          [classes.wrapperOpen]: open,
          [classes.wrapperClose]: !open
        })}
      >
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;

DesktopLayout.defaultProps = {
  open: false
};

DesktopLayout.propType = {
  open: PropTypes.bool
};
