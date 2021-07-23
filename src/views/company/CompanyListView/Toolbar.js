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
import { useCompanyToolbarStyles } from 'src/assets/styles/systemStyles';

const Toolbar = ({ className, ...rest }) => {
  const classes = useCompanyToolbarStyles();

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
              <InputLabel id="bbs-search-criteria-label-01">
                회사 구분
              </InputLabel>
              <Select
                labelId="bbs-search-criteria-label-01"
                id="bbs-search-criteria-01"
                label="유형"
              >
                <MenuItem value={0} name={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1} name={1}>
                  고객사
                </MenuItem>
                <MenuItem value={1} name={2}>
                  협력사
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
              <InputLabel id="bbs-search-criteria-label-02">
                사용유무
              </InputLabel>
              <Select
                labelId="bbs-search-criteria-label-02"
                id="bbs-search-criteria-02"
                label="회사"
              >
                <MenuItem value={0}>
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={1}>사용</MenuItem>
                <MenuItem value={2}>미사용</MenuItem>
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
                <MenuItem value={1}>회사 코드</MenuItem>
                <MenuItem value={1}>회사명</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={2}>
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
