import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import GoogleIcon from 'src/assets/icons/Google';
import Page from 'src/components/Page';
import { URL } from 'src/utils/constants';
import { useLoginStyles } from 'src/assets/styles/componentsStyles';
import axios from 'axios';

const LoginView = () => {
  const classes = useLoginStyles();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <Page className={classes.root} title="로그인">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'test@hist.co.kr',
              password: '1234'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('이메일 형식을 입력해주세요. ')
                .max(255)
                .required('필수입력 사항입니다. '),
              password: Yup.string()
                .max(255)
                .required('필수입력 사항입니다. ')
            })}
            onSubmit={() => {
              // navigate(URL, { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleSSOSubmit,
              handleSubmit,
              isSubmitting,
              touched
            }) => (
              <form onSubmit={handleSSOSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    로그인
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    HIST 직원은 Hanway SSO를 이용해주세요.
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Hanway SSO
                    </Button>
                  </Grid>
                </Grid>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="email"
                  margin="normal"
                  name={users.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  id={users.email}
                  value={users.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name={users.password}
                  id={users.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={users.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    로그인
                  </Button>
                </Box>
                <Link
                  color="textSecondary"
                  component={RouterLink}
                  to="/findid"
                  variant="h6"
                >
                  아이디 찾기
                </Link>
                <Link
                  className={classes.findpwdBtn}
                  color="textSecondary"
                  component={RouterLink}
                  to="/findpwd"
                  variant="h6"
                >
                  비밀번호 찾기
                </Link>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
