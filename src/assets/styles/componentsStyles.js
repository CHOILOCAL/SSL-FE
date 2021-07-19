import {makeStyles} from "@material-ui/core";

// 로그인
export const useLoginStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  findpwdBtn: {
    marginLeft: theme.spacing(3),
  }
}));
