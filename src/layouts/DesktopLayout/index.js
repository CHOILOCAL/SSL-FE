import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { desktopLayoutStyles } from 'src/assets/styles/globalStyles';
import TopBar from './TopBar';

const DesktopLayout = () => {
  const classes = desktopLayoutStyles();
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
