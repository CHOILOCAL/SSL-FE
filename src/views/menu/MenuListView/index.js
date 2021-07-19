import React from 'react';
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

const Index = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="메뉴 관리"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <h2>메뉴 관리</h2>
        </Box>
      </Container>
    </Page>
  );
};

export default Index;
