import { createStyles, makeStyles } from '@material-ui/core';

// global
const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%'
      },
      a: {
        textDecoration: 'none'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;

// DesktopLayout > index
export const desktopLayoutStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    // display: 'flex',
    // height: '100%',
    // overflow: 'hidden',
    // minHeight: '100%',
    // width: '100%'
  },
  wrapperOpen: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  wrapperClose: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

// DesktopLayout > Topbar
export const desktopLayoutTopbar = makeStyles({
  root: {},
  toolbar: {
    height: 64
  },
  drawerOpen: {
    width: '83.5%'
  },
  drawerClose: {
    width: '100vm'
  },
  icon: {
    marginRight: '10px'
  },
  buttonGrp: {
    marginLeft: 'auto'
  }
});

// desktopLayout > Navbar
export const desktopLayoutNavBar = makeStyles(() => ({
  desktopDrawerClose: {
    width: 256,
    heigth: 'calc(100%)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));
