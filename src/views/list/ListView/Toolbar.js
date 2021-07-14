import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {},
  buttonsSearch: {
  },
  buttonsWrite: {
    marginLeft: '10px',
  },
  grid: {
    display: 'flex',
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Grid container spacing={1} display="flex" justifyContent="flex-start" direction="row" alignItems="center">
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-02">구분</InputLabel>
              <Select
                labelId="bbs-search-criteria-label-02"
                id="bbs-search-criteria-02"
                label="구분"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>공지사항</MenuItem>
                <MenuItem value={2}>게시판</MenuItem>
                <MenuItem value={3}>QnA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-01">유형</InputLabel>
              <Select
                labelId="bbs-search-criteria-label-01"
                id="bbs-search-criteria-01"
                label="유형"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>제목</MenuItem>
                <MenuItem value={2}>본문</MenuItem>
                <MenuItem value={3}>작성자</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-03">기간</InputLabel>
              <Select
                labelId="bbs-search-criteria-label-03"
                id="bbs-search-criteria-03"
                label="기간"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>최근 30일</MenuItem>
                <MenuItem value={2}>최근 90일</MenuItem>
                <MenuItem value={3}>최근 1년</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={4}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              label="검색어"
              placeholder="검색어 입력"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} sm={2} className={classes.grid}>
            <Box className={classes.buttonsSearch}>
              <Button color="primary" variant="contained">
                검색
              </Button>
            </Box>
            <Box className={classes.buttonsWrite}>
            <Button color="primary" variant="contained">
                글쓰기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
