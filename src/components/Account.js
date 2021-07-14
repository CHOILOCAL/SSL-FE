import React, { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useAccountStyles = makeStyles((theme) => ({
  titleSub: {
    color: theme.palette.grey[100],
    marginLeft: 20
  },
  titleMement: {
    marginLeft: 20
  },
  button: {
    marginRight: 3
  },
}));

const Account = (props) => {
  const classes = useAccountStyles();
  const [ismember, setIsmember] = useState(false);

  const login = () => {
    if (ismember === false) {
      setIsmember(true);
    } else {
      setIsmember(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
    {ismember ? <><RouterLink to="/account"><Button variant="outlined" className={classes.button} startIcon={<AccountCircleIcon />}>내 프로필</Button></RouterLink><RouterLink to="/"><Button onClick={login} variant="outlined" className={classes.button} startIcon={<AccountCircleIcon />}>로그아웃</Button></RouterLink></> : <><RouterLink to="/"><Button onClick={login} variant="outlined" className={classes.button} startIcon={<AccountCircleIcon />}>로그인</Button></RouterLink><RouterLink to="/signup"><Button variant="outlined" className={classes.button} startIcon={<AccountCircleIcon />}>회원가입</Button></RouterLink></>}
    </Box>
  );
};

export default Account;
