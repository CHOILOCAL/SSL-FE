import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useAccountStyles = makeStyles({
  button: {
    marginRight: 3
  }
});

const AccountBtn = props => {
  const classes = useAccountStyles();

  const login = () => {
    console.log('login');
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <RouterLink to="/account">
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<AccountCircleIcon />}
        >
          내 프로필
        </Button>
      </RouterLink>
      <RouterLink to="/logout">
        <Button
          onClick={login}
          variant="outlined"
          className={classes.button}
          startIcon={<AccountCircleIcon />}
        >
          로그아웃
        </Button>
      </RouterLink>
      <RouterLink to="/login">
        <Button
          onClick={login}
          variant="outlined"
          className={classes.button}
          startIcon={<AccountCircleIcon />}
        >
          로그인
        </Button>
      </RouterLink>
      <RouterLink to="/signup">
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<AccountCircleIcon />}
        >
          회원가입
        </Button>
      </RouterLink>
    </Box>
  );
};

export default AccountBtn;
