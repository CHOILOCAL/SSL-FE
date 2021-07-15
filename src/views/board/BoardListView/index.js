import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
}));

const BoardListView = () => {
  const classes = useStyles();
  const [articles] = useState([]);

  return (
    <Page
      className={classes.root}
      title="게시판 관리"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results articles={articles} />
        </Box>
      </Container>
    </Page>
  );
};

export default BoardListView;
