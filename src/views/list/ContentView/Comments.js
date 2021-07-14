import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},

  container: {
    display: 'flex',
  },
  commentBox: {
    marginTop: theme.spacing(1),
  },
  commentAuthor: {
    color: theme.palette.grey['900'],
  },
  commentDate: {
    color: theme.palette.grey['500'],
    marginLeft: theme.spacing(2),
  },
  commentText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.grey['700'],
  },
}));

const Comments = ({ className, ...rest }) => {
  const classes = useStyles();
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader title="Comments" />
        <Box fullWidth className={classes.container}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="답글 작성"
            name="comment"
            onChange={handleChange}
            value={comment}
            variant="outlined"
          />
          <Button color="primary" variant="contained">입력</Button>
        </Box>
        <CardContent>
          {[0, 1].map(() => (
            <Box className={classes.commentBox}>
              <Box className={classes.container}>
                <Typography variant="h5" className={classes.commentAuthor}>일업둥</Typography>
                <Typography variant="h5" className={classes.commentDate}>2021.01.04</Typography>
              </Box>
              <Typography className={classes.commentText}>긴 세미나 끝까지 들어주셔서 감사합니다.</Typography>
              <Divider />
            </Box>
          ))}
        </CardContent>
      </Card>
    </form>
  );
};

Comments.propTypes = {
  className: PropTypes.string
};

export default Comments;
