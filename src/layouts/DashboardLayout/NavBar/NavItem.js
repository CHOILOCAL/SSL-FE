import React from 'react';
import PropTypes from 'prop-types';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { makeStyles } from '@material-ui/core/styles';
// const items = [
//   {
//     highNodeId: '1',
//     href: '/app/system',
//     nodeId: '1',
//     label: '시스템 관리',
//   },
//   {
//     highNodeId: '1',
//     href: '/app/system/code',
//     nodeId: '2',
//     label: '공통코드 관리'
//   },
//   {
//     highNodeId: '1',
//     href: '/app/system/menu',
//     nodeId: '3',
//     label: '메뉴 관리'
//   },
//   {
//     highNodeId: '1',
//     href: '/app/system/user',
//     nodeId: '4',
//     label: '사용자 관리'
//   },
//   {
//     highNodeId: '1',
//     href: '/app/system/auth',
//     nodeId: '5',
//     label: '권한 관리'
//   },
// ];
const NavItem = () => {
  return (
    <>
      <StyledTreeItem nodeId="1" labelText="시스템 관리" to="/signup" labelIcon={BuildIcon}>
        <RouterLink to="/app/v1/list"><StyledTreeItem nodeId="2" labelText="공통코드 관리" labelIcon={CodeIcon} /></RouterLink>
        <RouterLink to="/app/v1/products"><StyledTreeItem nodeId="3" labelText="메뉴 관리" labelIcon={ListIcon} /></RouterLink>
        <RouterLink to="/app/v1/user"><StyledTreeItem nodeId="4" labelText="사용자 관리" labelIcon={AccountCircleIcon} /></RouterLink>
        <RouterLink to="/app/v1/dashboard"><StyledTreeItem nodeId="5" labelText="권한 관리" labelIcon={VerifiedUserIcon} /></RouterLink>
      </StyledTreeItem>
      <br />
      <StyledTreeItem nodeId="6" label="Depth 1">
          <StyledTreeItem nodeId="7" label="Depth 2"><RouterLink to="/app/v1/settings">
            <StyledTreeItem nodeId="8" label="Depth 3" /></RouterLink>
        </StyledTreeItem>
      </StyledTreeItem>
    </>
  );
};

export default NavItem;

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      // backgroundColor: theme.palette.action.hover
    },
    '&:focus > $content, &$selected > $content': {
      // backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      // color: 'var(--tree-view-color)'
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent'
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit'
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other
  } = props;

  return (
    <TreeItem
      label={(
        <div className={classes.labelRoot}>
          <LabelIcon className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption">
            {labelInfo}
          </Typography>
        </div>
      )}
      style={{
        // '--tree-view-color': color,
        // '--tree-view-bg-color': bgColor
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}
StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};
