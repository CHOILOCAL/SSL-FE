import React from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const CompanyView = () => {
  const classes = useStyles();

  axios({
    method: 'GET',
    url: 'system/users'
  })
    .then(function(response) {
      // 성공
      setUser(response.data.response.page);
    })
    .catch(function(error) {
      // 실패
      console.log(`error`);
    })
    .then(function() {
      // ...default
    });

  return (
    <Page
      className={classes.root}
      title="회사 관리"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <h2>회사 관리</h2>
        </Box>
      </Container>
    </Page>
  );
};

export default CompanyView;
