import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const companyList = [
  {
    value: 'HX',
    label: '한진정보통신'
  },
  {
    value: 'KE',
    label: '대한항공'
  },
  {
    value: 'HJ',
    label: '(주)한진'
  },
  {
    value: 'LJ',
    label: '진에어'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '최현지',
    location: '대한항공 인재개발원 2F',
    email: 'hyunchoi@hist.co.kr',
    phone: '010-9686-3007',
    company: '한진정보통신',
    department: '사업지원팀'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="아래 개인정보를 수정할 수 있습니다."
          title="개인정보변경"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="성명을 입력해주세요."
                label="성명"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="근무 위치를 입력해주세요."
                label="위치"
                name="location"
                onChange={handleChange}
                required
                value={values.location}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="이메일을 입력해주세요."
                label="이메일"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="휴대폰번호를 입력해주세요."
                label="휴대폰 번호"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="회사를 입력해주세요."
                label="회사"
                name="companyList"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.companyList}
                variant="outlined"
              >
                {companyList.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="부서를 입력해주세요."
                label="부서"
                name="department"
                onChange={handleChange}
                required
                value={values.department}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            저장
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
