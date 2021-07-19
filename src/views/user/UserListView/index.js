import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';

const useUserStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const UserListView = () => {
  const classes = useUserStyles();
  const [user, setUser] = useState([]);

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

export default UserListView;
