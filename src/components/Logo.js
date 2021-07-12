import React from 'react';
import moment from 'moment';
import { Box, Typography, makeStyles } from '@material-ui/core';
import histLogo from '../assets/images/hist.png';

const useStyles = makeStyles((theme) => ({
  titleSub: {
    color: theme.palette.grey[100],
    marginLeft: 20
  },
  titleMement: {
    marginLeft: 20
  }
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img alt="Logo" src={histLogo} {...props} />
      <Typography variant="h4" className={classes.titleSub}>
        <span className={classes.titleMement}>
          {`${moment().format('hh:mm A')}`}</span>
      </Typography>
    </Box>
  );
};

export default Logo;
