import React, { useState } from 'react';
import axios from 'axios';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import { URL } from '../../../utils/constants';

const useUserStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const userListView = () => {
  const classes = useUserStyles();
  const [user, setUser] = useState([]);

  // axios({
  //   method: 'GET',
  //   url: 'system/users'
  // })
  //   .then(function(response) {
  //     // 성공
  //     setUser(response.data.response.page);
  //   })
  //   .catch(function(error) {
  //     // 실패
  //     console.log(`error`);
  //   })
  //   .then(function() {
  //     // ...default
  //   });

  return (
    <Page className={classes.root} title="사용자 관리">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={user} />
        </Box>
      </Container>
    </Page>
  );
};

export default userListView;
