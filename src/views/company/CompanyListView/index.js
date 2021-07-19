import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { useCompanyStyles } from 'src/assets/styles/SystemStyles';
import Page from 'src/components/Page';
import Toolbar from 'src/views/company/CompanyListView/Toolbar';
import axios from 'axios';
import Results from './Results';

const CompanyView = () => {
  const classes = useCompanyStyles();
  const [companys, setCompanys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setError(null);
        setLoading(true);
        setLoading(false);
        await axios({
          method: 'get',
          url: 'api/system/company/list'
        })
          .then(function(api) {
            // 성공
            if (api.status === 200 && api.statusText === 'OK') {
              console.log(`success`);
              setCompanys(api.data.response.page);
            }
          })
          .catch(function(e) {
            console.log(`error` + e);
          })
          .then(function() {
            console.log(data.response.page);
          });
        console.log(response);
      } catch (e) {
        setError(e);
      }
    };
    fetchCompany();
  }, []);

  return (
    <Page className={classes.root} title="회사 관리">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results companys={companys} />
        </Box>
      </Container>
    </Page>
  );
};

export default CompanyView;
