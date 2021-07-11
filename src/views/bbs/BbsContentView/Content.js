import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  articleInfoBox: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleInfoCell: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
}));

const Content = ({ data }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={data.title} />
      <Box className={classes.articleInfoBox}>
        <Box className={classes.articleInfoCell}>
          <Typography color="textPrimary" variant="h6">작성자 :&nbsp;</Typography>
          <Typography color="textSecondary" variant="h6">{data.name}</Typography>
        </Box>
        <Box className={classes.articleInfoCell}>
          <Typography color="textPrimary" variant="h6">구분 :&nbsp;</Typography>
          <Typography color="textSecondary" variant="h6">{data.category}</Typography>
        </Box>
        <Box className={classes.articleInfoCell}>
          <Typography color="textPrimary" variant="h6">작성일 :&nbsp;</Typography>
          <Typography color="textSecondary" variant="h6">{data.date}</Typography>
        </Box>
      </Box>

      <Divider />
      <CardContent>
        {data.content.split('\n').map((line) => (
          <span>
            {line}
            <br />
          </span>
        ))}
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Link to="/bbs/list">
          <Button color="primary" variant="contained">목록으로</Button>
        </Link>
      </Box>
    </Card>
  );
};

Content.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Content;
