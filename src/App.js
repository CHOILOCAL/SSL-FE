import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/assets/styles/GlobalStyles';
import theme from 'src/theme';
import routes from 'src/routes';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
