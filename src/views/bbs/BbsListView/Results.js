import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, articles, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const articlesIndexed = articles.map((row, idx) => ({ idx, ...row }));

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <Hidden xsDown>
                  <TableCell>구분</TableCell>
                </Hidden>
                <TableCell>제목</TableCell>
                <Hidden xsDown>
                  <TableCell>작성자</TableCell>
                </Hidden>
                <TableCell>작성일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articlesIndexed.slice(page * limit, (page + 1) * limit).map((row) => (
                <TableRow hover key={row.idx} component={Link} to={`/bbs/view/${row.idx}`}>
                  <Hidden xsDown>
                    <TableCell>{row.category}</TableCell>
                  </Hidden>
                  <TableCell>{row.title}</TableCell>
                  <Hidden xsDown>
                    <TableCell>
                      <Box alignItems="center" display="flex">
                        <Avatar className={classes.avatar}>{getInitials(row.name)}</Avatar>
                        <Typography color="textPrimary" variant="body1">{row.name}</Typography>
                      </Box>
                    </TableCell>
                  </Hidden>
                  <Hidden xsDown>
                    <TableCell>{row.date}</TableCell>
                  </Hidden>
                  <Hidden smUp>
                    <TableCell>{row.date.substr(5)}</TableCell>
                  </Hidden>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={articles.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  articles: PropTypes.array.isRequired
};

export default Results;
