import React from 'react';
import PropTypes from 'prop-types';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { URL } from 'src/utils/constants';

const NavItem = () => {
  const URL_PATH = URL;

  return (
    <>
      <StyledTreeItem nodeId="1" labelText="시스템 관리" to="/signup">
        <RouterLink to="/app/code">
          <StyledTreeItem nodeId="2" labelText="공통코드 관리" />
        </RouterLink>
        <RouterLink to="/app/menu">
          <StyledTreeItem nodeId="3" labelText="메뉴 관리" />
        </RouterLink>
        <RouterLink to="/app/user">
          <StyledTreeItem nodeId="4" labelText="사용자 관리" />
        </RouterLink>
        <RouterLink to="/app/company">
          <StyledTreeItem nodeId="5" labelText="회사 관리(API Example)" />
        </RouterLink>
        <RouterLink to="/app/dept">
          <StyledTreeItem nodeId="6" labelText="부서 관리" />
        </RouterLink>
        <RouterLink to="/app/auth">
          <StyledTreeItem nodeId="7" labelText="권한 관리" />
        </RouterLink>
      </StyledTreeItem>
      <StyledTreeItem nodeId="9" labelText="게시판" to="/signup">
        <RouterLink to="/app/dashboard">
          <StyledTreeItem nodeId="10" labelText="대시보드 관리" />
        </RouterLink>
        <RouterLink to="/app/board">
          <StyledTreeItem nodeId="10" labelText="게시판 관리" />
        </RouterLink>
      </StyledTreeItem>
      <br />
      <StyledTreeItem nodeId="6" labelText="Depth 1">
        <StyledTreeItem nodeId="7" labelText="Depth 2">
          <RouterLink to="/app/example">
            <StyledTreeItem nodeId="8" labelText="EXAMPLE" />
          </RouterLink>
        </StyledTreeItem>
      </StyledTreeItem>
    </>
  );
};

export default NavItem;

const useTreeItemStyles = makeStyles(theme => ({
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
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption">{labelInfo}</Typography>
        </div>
      }
      style={
        {
          // '--tree-view-color': color,
          // '--tree-view-bg-color': bgColor
        }
      }
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

StyledTreeItem.defaultProps = {};

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};
