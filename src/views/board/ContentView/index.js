import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useParams } from 'react-router';
import Comments from './Comments';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SettingsView = () => {
  const classes = useStyles();
  const { index } = useParams();
  // const article = data[index];

  return (
    <Page
      className={classes.root}
      title="게시판 내용 보기"
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          <Comments />
        </Box>
      </Container>
    </Page>
  );
};

export default SettingsView;
