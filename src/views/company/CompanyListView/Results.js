import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useCompanyResultsStyles } from 'src/assets/styles/systemStyles';

const Results = ({ className, companys, ...rest }) => {
  const classes = useCompanyResultsStyles();
  const [selectedCompanyIds, setselectedCompanyIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    let newSelectedCompanys;

    if (event.target.checked) {
      newSelectedCompanys = companys.map(company => company.company_id);
    } else {
      newSelectedCompanys = [];
    }

    setselectedCompanyIds(newSelectedCompanys);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCompanyIds.indexOf(id);
    let newSelectedCompanys = [];

    if (selectedIndex === -1) {
      newSelectedCompanys = newSelectedCompanys.concat(selectedCompanyIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCompanys = newSelectedCompanys.concat(
        selectedCompanyIds.slice(1)
      );
    } else if (selectedIndex === selectedCompanyIds.length - 1) {
      newSelectedCompanys = newSelectedCompanys.concat(
        selectedCompanyIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCompanys = newSelectedCompanys.concat(
        selectedCompanyIds.slice(0, selectedIndex),
        selectedCompanyIds.slice(selectedIndex + 1)
      );
    }

    setselectedCompanyIds(newSelectedCompanys);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCompanyIds.length === companys.length}
                    color="primary"
                    indeterminate={
                      selectedCompanyIds.length > 0 &&
                      selectedCompanyIds.length < companys.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>회사 구분</TableCell>
                <TableCell>회사 코드</TableCell>
                <TableCell>회사명</TableCell>
                <TableCell>비고</TableCell>
                <TableCell>등록일</TableCell>
                <TableCell>사용시작일</TableCell>
                <TableCell>사용종료일</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companys.slice(0, limit).map(company => (
                <TableRow
                  hover
                  key={company.company_id}
                  selected={
                    selectedCompanyIds.indexOf(company.company_id) !== -1
                  }
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={
                        selectedCompanyIds.indexOf(company.company_id) !== -1
                      }
                      onChange={event =>
                        handleSelectOne(event, company.company_id)
                      }
                      value="true"
                    />
                  </TableCell>
                  <TableCell>{`${company.company_category_name}`}</TableCell>
                  <TableCell>{company.company_id}</TableCell>
                  <TableCell>{company.company_name}</TableCell>
                  <TableCell>{company.note_contents}</TableCell>
                  <TableCell>{company.register_datetime}</TableCell>
                  <TableCell>{company.use_start_date}</TableCell>
                  <TableCell>{company.use_end_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={companys.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  companys: PropTypes.array.isRequired
};

export default Results;
