import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Grid
          container
          spacing={1}
          display="flex"
          justifyContent="flex-start"
          direction="row"
          alignItems="center"
        >
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-02">회사</InputLabel>
              <Select
                labelId="bbs-search-criteria-label-02"
                id="bbs-search-criteria-02"
                label="회사"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>(주)한진</MenuItem>
                <MenuItem value={2}>한진정보통신</MenuItem>
                <MenuItem value={3}>진에어</MenuItem>
                <MenuItem value={3}>대한항공</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-01">부서</InputLabel>
              <Select
                labelId="bbs-search-criteria-label-01"
                id="bbs-search-criteria-01"
                label="유형"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>거버넌스그룹</MenuItem>
                <MenuItem value={2}>아키텍쳐그룹</MenuItem>
                <MenuItem value={3}>운영PMO그룹</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="bbs-search-criteria-label-03">
                검색 키워드
              </InputLabel>
              <Select
                labelId="bbs-search-criteria-label-03"
                id="bbs-search-criteria-03"
                label="기간"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>ID</MenuItem>
                <MenuItem value={2}>성명</MenuItem>
                <MenuItem value={3}>휴대폰번호</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={4}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
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
